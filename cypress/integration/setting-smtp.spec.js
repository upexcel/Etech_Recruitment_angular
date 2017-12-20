import * as data from '../../cypress.json';
describe('Setting/SMTP Page Test', function() {
  beforeEach(function() {
    cy.login(data.email, data.password);
    cy.visit(data.baseUrl + '/core/setting/smtp');
  })
  afterEach(function() {
    cy.logout();
  })
  // it should visit setting / smtp page
  it('Visits the Setting/SMTP Page', function() {
    // cy.visit(data.baseUrl+'/core/setting/smtp');
  })

  //it should test if form is empty then form submit button must be disable
  it('Test smtp Form With Empty Data', function() {
    cy.get('#smtpForm').within(function() {
      cy.get('#smtpFormUserEmail input').should('have.attr', 'placeholder', 'Email/User Name');
      cy.get('#smtpFormSendEmail input').should('have.attr', 'placeholder', 'Email (send via)');
      cy.get('#smtpFormPassword input').should('have.attr', 'placeholder', 'Password');
      cy.get('#smtpFormServerName input').should('have.attr', 'placeholder', 'SMTP Server');
      cy.get('#smtpFormPort input').should('have.attr', 'placeholder', 'Server port');
      cy.get('#smtpFormRadio #option1').should('have.attr', 'checked');
      cy.get('#smtpFormRadio #option2').should('not.have.attr', 'checked');
      cy.get('#smtpFormSave button').should('have.attr', 'ng-reflect-disabled', 'true')
    })
  })

  //      //it should test, user name field, email field, password field, smtp server field, server port field are required and valid, if any of these field is not valid submit button must be disabled
  it('Test smtp Form With Wrong Data', function() {
    cy.get('#smtpForm').within(function() {
      cy.get('#smtpFormUserEmail input')
        .type('fakeEmail').should('have.value', 'fakeEmail');
      cy.get('#smtpFormSendEmail input')
        .type('fakeEmail').should('have.value', 'fakeEmail');
      cy.get('#smtpFormPassword input')
        .type('password').should('have.value', 'password');
      cy.get('#smtpFormServerName input')
        .type('smtp').should('have.value', 'smtp');
      cy.get('#smtpFormSave button').should('have.attr', 'ng-reflect-disabled', 'true')
    })
  })

  //     // //it should test, if we provide right data but with wrong credential, submit button must be enable and if click submit it should give error on ui
  it('Test smtp Form With Right Data with wrong credetial', function() {
    cy.get('#smtpForm').within(function() {
      cy.get('#smtpFormUserEmail input')
        .type(data.email).should('have.value', data.email);
      cy.get('#smtpFormSendEmail input')
        .type(data.email).should('have.value', data.email);
      cy.get('#smtpFormPassword input')
        .type(data.password).should('have.value', data.password);
      cy.get('#smtpFormServerName input')
        .type(data.serverName).should('have.value', data.serverName);
      cy.get('#smtpFormPort input')
        .type(data.portNo).should('have.value', data.portNo);
      cy.get('#option1 .mat-radio-container').click();
      cy.get('#smtpFormSave button').should('have.attr', 'ng-reflect-disabled', 'false');
      cy.get('#smtpFormSave button').click();
      cy.get("md-dialog-container").should("not.be.visible");
      cy.get('#showError').should('have.class', 'error');
    })
  })

  //it should test if we provide right data to form, save button must be enable, and fire api and got response if api giving success , so data must be added in smtp table, if any error show it to user (like same smtp if already added, if any), and this smtp must be status inactive by default
  //it should test if we provide right data to form, save button must be enable, and fire api and got response if any error show it to user (like same smtp if already added, if any).
  it('Test smtp Form With Used Smtp  Data', function() {
    cy.server()
    cy.route({
      method: 'POST',
      url: data.apiUrl + `/smtp/save**`,
      response: { "response_status": { "message": "Status Changed Successfully" }, "data": { "status": false, "id": 5, "username": "testhr69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "ssl", "email": "testhr69@gmail.com", "updatedAt": "2017-12-18T12:25:09.000Z", "createdAt": "2017-12-18T12:25:09.000Z" } }
    })
    cy.get('#smtpFormUserEmail input')
      .type(data.smtpUsedEmail).should('have.value', data.smtpUsedEmail);
    cy.get('#smtpFormSendEmail input')
      .type(data.smtpUsedEmail).should('have.value', data.smtpUsedEmail);
    cy.get('#smtpFormPassword input')
      .type(data.smtpPassword).should('have.value', data.smtpPassword);
    cy.get('#smtpFormServerName input')
      .type(data.serverName).should('have.value', data.serverName);
    cy.get('#smtpFormPort input')
      .type(data.portNo).should('have.value', data.portNo);
    cy.get('#option1 .mat-radio-container').click();
    cy.get('#smtpFormSave button').should('have.attr', 'ng-reflect-disabled', 'false');
    cy.route({
      method: 'GET',
      url: data.apiUrl + `/smtp/get/**`,
      response: [{ "id": 6, "email": "testhr69@gmail.com", "username": "testhr69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "SSL", "status": true, "createdAt": "2017-12-18T13:44:29.000Z", "updatedAt": "2017-12-18T13:44:30.000Z" }]
    })
    cy.get('#smtpFormSave button').click()
  })
  // it should test if we provide right data to form, save button must be enable, and fire api and got response if api giving success , so data must be added in smtp table, and this smtp must be status inactive by default
  it('Test smtp Form With New Smtp  Data', function() {
    cy.server()
    cy.route({
      method: 'POST',
      url: data.apiUrl + `/smtp/save**`,
      response: { "response_status": { "message": "Status Changed Successfully" }, "data": { "status": false, "id": 3, "username": "testexcel69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "ssl", "email": "testexcel69@gmail.com", "updatedAt": "2017-12-19T05:08:20.000Z", "createdAt": "2017-12-19T05:08:20.000Z" } }
    })
    cy.route({
      method: 'GET',
      url: data.apiUrl + `/smtp/get/**`,
      response: [{ "id": 6, "email": "testhr69@gmail.com", "username": "testhr69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "SSL", "status": true, "createdAt": "2017-12-18T13:44:29.000Z", "updatedAt": "2017-12-18T13:44:30.000Z" }]
    })
    cy.get('#smtpForm').within(function() {
      cy.get('#smtpFormUserEmail input')
        .type(data.newSmtpEmail).should('have.value', data.newSmtpEmail);
      cy.get('#smtpFormSendEmail input')
        .type(data.newSmtpEmail).should('have.value', data.newSmtpEmail);
      cy.get('#smtpFormPassword input')
        .type(data.smtpPassword).should('have.value', data.smtpPassword);
      cy.get('#smtpFormServerName input')
        .type(data.serverName).should('have.value', data.serverName);
      cy.get('#smtpFormPort input')
        .type(data.portNo).should('have.value', data.portNo);
      cy.get('#option1 .mat-radio-container').click();
      cy.get('#smtpFormSave button').should('have.attr', 'ng-reflect-disabled', 'false');
      cy.route({
        method: 'GET',
        url: data.apiUrl + `/smtp/get/**`,
        response: [{ "id": 3, "email": "testexcel69@gmail.com", "username": "testexcel69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "SSL", "status": true, "createdAt": "2017-12-19T05:08:20.000Z", "updatedAt": "2017-12-19T05:08:20.000Z" }, { "id": 1, "email": "testhr69@gmail.com", "username": "testhr69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "SSL", "status": false, "createdAt": "2017-12-19T05:04:58.000Z", "updatedAt": "2017-12-19T05:08:21.000Z" }]
      })
    })
    cy.get('#smtpFormSave button').click()
    cy.get('#tbody tr:first>td:first').should('have.text', data.newSmtpEmail);
  })
  //test active status record not be deleted
  it('Test active status record not be deleted', function() {
    cy.server()
    cy.route({
      method: 'POST',
      url: data.apiUrl + `/smtp/save**`,
      response: { "response_status": { "message": "Status Changed Successfully" }, "data": { "status": false, "id": 3, "username": "testexcel69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "ssl", "email": "testexcel69@gmail.com", "updatedAt": "2017-12-19T05:08:20.000Z", "createdAt": "2017-12-19T05:08:20.000Z" } }
    })
    cy.route({
      method: 'GET',
      url: data.apiUrl + `/smtp/get/**`,
      response: [{ "id": 3, "email": "testexcel69@gmail.com", "username": "testexcel69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "SSL", "status": true, "createdAt": "2017-12-19T05:08:20.000Z", "updatedAt": "2017-12-19T05:08:20.000Z" }, { "id": 1, "email": "testhr69@gmail.com", "username": "testhr69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "SSL", "status": false, "createdAt": "2017-12-19T05:04:58.000Z", "updatedAt": "2017-12-19T05:08:21.000Z" }]
    })
    cy.get('#tbody tr:first #status').then(($state) => {
      const status = Cypress._.chain($state).take('property', 'class').value();
      if (status[0].className === "on") {
        cy.get('#tbody tr:first #remove').should('have.attr', 'ng-reflect-disabled', 'true');

      }
    })
  })

  //test if number of record are more than 1, only 1 record can be activated at a time. Click to a deactive record to make  it active and test all other record must be deactivated.
  it('Test only a single record can be activated', function() {
    cy.server()
    cy.route({
      method: 'POST',
      url: data.apiUrl + `/smtp/save**`,
      response: { "response_status": { "message": "Status Changed Successfully" }, "data": { "status": false, "id": 3, "username": "testexcel69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "ssl", "email": "testexcel69@gmail.com", "updatedAt": "2017-12-19T05:08:20.000Z", "createdAt": "2017-12-19T05:08:20.000Z" } }
    })
    cy.route({
      method: 'GET',
      url: data.apiUrl + `/smtp/get/**`,
      response: [{ "id": 3, "email": "testexcel69@gmail.com", "username": "testexcel69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "SSL", "status": true, "createdAt": "2017-12-19T05:08:20.000Z", "updatedAt": "2017-12-19T05:08:20.000Z" }, { "id": 1, "email": "testhr69@gmail.com", "username": "testhr69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "SSL", "status": false, "createdAt": "2017-12-19T05:04:58.000Z", "updatedAt": "2017-12-19T05:08:21.000Z" }]
    })
    cy.route({
      method: 'PUT',
      url: data.apiUrl + `/smtp/changeStatus/**`,
      response: { "message": "Status Changed Successfully" }
    })
    cy.get('#tbody tr:first #status').then(($state) => {
      const status = Cypress._.chain($state).take('property', 'class').value();
      if (status[0].className === "on") {
        cy.get('#tbody tr:last #status').should('have.class', 'off');
        cy.route({
          method: 'GET',
          url: data.apiUrl + `/smtp/get/**`,
          response: [{ "id": 5, "email": "testexcel69@gmail.com", "username": "testexcel69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "SSL", "status": false, "createdAt": "2017-12-19T05:22:58.000Z", "updatedAt": "2017-12-19T05:30:36.000Z" }, { "id": 4, "email": "testhr69@gmail.com", "username": "testhr69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "SSL", "status": true, "createdAt": "2017-12-19T05:21:49.000Z", "updatedAt": "2017-12-19T05:30:36.000Z" }]
        })
        cy.get('#tbody tr:last #status').click();
        cy.get('#tbody tr:last #status').should('have.class', 'on');
        cy.get('#tbody tr:first #status').should('have.class', 'off');
      } else if (status[0].className === "off") {
        cy.get('#tbody tr:last #status').should('have.class', 'on');
        cy.get('#tbody tr:first #status').click();
        cy.get('#tbody tr:last #status').should('have.class', 'off');
        cy.get('#tbody tr:first #status').should('have.class', 'on');
      }
    })
  })
  // test deactive status record can be deleted
  it('Test deactive status record can be deleted', function() {
    cy.server()
    cy.route({
      method: 'POST',
      url: data.apiUrl + `/smtp/save**`,
      response: { "response_status": { "message": "Status Changed Successfully" }, "data": { "status": false, "id": 3, "username": "testexcel69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "ssl", "email": "testexcel69@gmail.com", "updatedAt": "2017-12-19T05:08:20.000Z", "createdAt": "2017-12-19T05:08:20.000Z" } }
    })
    cy.route({
      method: 'GET',
      url: data.apiUrl + `/smtp/get/**`,
      response: [{ "id": 5, "email": "testexcel69@gmail.com", "username": "testexcel69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "SSL", "status": false, "createdAt": "2017-12-19T05:22:58.000Z", "updatedAt": "2017-12-19T05:30:36.000Z" }, { "id": 4, "email": "testhr69@gmail.com", "username": "testhr69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "SSL", "status": true, "createdAt": "2017-12-19T05:21:49.000Z", "updatedAt": "2017-12-19T05:30:36.000Z" }]
    })
    cy.get('#tbody tr:first #status').then(($state) => {
      cy.route({
        method: 'DELETE',
        url: data.apiUrl + `/smtp/delete/**`,
        response: { "status": "SUCCESS" }
      })
      cy.route({
        method: 'GET',
        url: data.apiUrl + `/smtp/get/**`,
        response: [{ "id": 8, "email": "testhr69@gmail.com", "username": "testhr69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "SSL", "status": true, "createdAt": "2017-12-19T07:07:07.000Z", "updatedAt": "2017-12-19T07:08:25.000Z" }]
      })
      const status = Cypress._.chain($state).take('property', 'class').value();
      if (status[0].className === "off") {
        cy.get('#tbody tr:last #status').click()
        cy.get('#tbody tr:last #remove').should('have.attr', 'ng-reflect-disabled', 'true');
        cy.get('#tbody tr:first #status').should('have.class', 'off');
        cy.get('#tbody tr:first #remove').should('have.attr', 'ng-reflect-disabled', 'false');
        cy.get('#tbody tr:first>td:first').then((data) => {
          const email = data[0].innerText;
          cy.get('#tbody tr:first #remove').click()
          cy.get('#tbody tr:first>td:first').should('not.have.text', email);
        })
      }
    })
  })
  //  test any active record, fire api to test record
  it('Test a smtp record', function() {
    cy.server()
    cy.route({
      method: 'GET',
      url: data.apiUrl + `/smtp/get/**`,
      response: [{ "id": 8, "email": "testhr69@gmail.com", "username": "testhr69@gmail.com", "password": "java@123", "smtp_server": "smtp.gmail.com", "server_port": 465, "type": "SSL", "status": true, "createdAt": "2017-12-19T07:07:07.000Z", "updatedAt": "2017-12-19T07:08:25.000Z" }]
    })
    cy.route({
      method: 'PUT',
      url: data.apiUrl + `/smtp/testSmtp/**`,
      response: { "message": "messsage send successfully", "status": 1, "email_response": { "accepted": ["testhr69@gmail.com"], "rejected": [], "response": "250 2.0.0 OK 1513667574 q6sm820899ita.38 - gsmtp", "envelope": { "from": "testhr69@gmail.com", "to": ["testhr69@gmail.com"] }, "messageId": "3adb999f-a831-a1bf-fe2f-eb86e8f0789f@gmail.com" }, "subject": "Smtp test", "body": "Smtp test successfully<img src=\"http://api.recruit.excellencetechnologies.in/track/testhr69@gmail.com/testhr69@gmail.comgxpjucgwv\">", "reply_to": "testhr69+tsqgj9vtm@gmail.com", "tracking_id": "testhr69@gmail.comgxpjucgwv" }
    })
    cy.get('#tbody tr:last #test').click()
    cy.get('simple-snack-bar').should('have.class', 'mat-simple-snackbar');
  })
})