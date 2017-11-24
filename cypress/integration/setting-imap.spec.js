import * as data from '../../cypress.json';
describe('Setting/Imap Page Test', function() {
<<<<<<< HEAD
  // beforeEach(function() {
  //   cy.login(data.email, data.password);
  //   cy.visit(data.baseUrl + '/core/setting/imap');
  //   cy.server()
  //   cy.route({ method: 'POST', url: `http://localhost:8091/imap/save**` }).as('apiResponse')
  //   cy.route({ method: 'GET', url: `**` }).as('getApiResponse')
  //   cy.route({ method: 'DELETE', url: `http://localhost:8091/**` }).as('deleteImap')
  //   cy.route({ method: 'PUT', url: `http://localhost:8091/imap/statusActive/**` }).as('updateStatus')

  // })
  // afterEach(function() {
  //   cy.wait('@getApiResponse')
  //   cy.logout();
  // })
=======
  beforeEach(function() {
    cy.login(data.email, data.password);
    // cy.visit(data.baseUrl + '/core/setting/imap');
    cy.get('#sideNav').click()
    cy.get('md-sidenav #setting').click()
    cy.server()
    cy.route({ method: 'POST', url: `http://localhost:8091/imap/save**` }).as('apiResponse')
    cy.route({ method: 'GET', url: `**` }).as('getApiResponse')
    cy.route({ method: 'DELETE', url: `http://localhost:8091/**` }).as('deleteImap')
    cy.route({ method: 'PUT', url: `http://localhost:8091/imap/statusActive/**` }).as('updateStatus')

  })
  afterEach(function() {
    cy.logout();
  })
>>>>>>> d70f8e03edb7c01d963ef08b127b0b76f51830c7

  // it should test if form is empty then form submit button must be disable
     it('Test Imap Form With Empty Data', function () {
      // cy.get('#imapForm').within(function () {
      //   cy.get('#FormEmail input').should('have.attr', 'placeholder', 'Email');
      //   cy.get('#FormPassword input').should('have.attr', 'placeholder', 'Password')
      //   cy.get('#FormDate #date').should('have.attr', 'placeholder', 'Date')
      //   cy.get('#FormButton button').should('have.attr', 'ng-reflect-disabled', 'true')
      //   })
  })

    //it should test, email field, password field, date are required and valid also test if wrong data provided api must giving an error and user can see error in ui.
     it('Test Imap Form With Wrong Data', function () {
        // cy.get('#imapForm').within(function () {
        // cy.get('#FormEmail input')
        // .type('fakeEmail').should('have.value', 'fakeEmail');
        // cy.get('#FormPassword input')
        // .type('password').should('have.value', 'password');
        // cy.get('#FormDate #date')
        // .type('15112017').should('have.value', '15112017');
        // cy.get('#FormButton button').should('have.attr', 'ng-reflect-disabled', 'true')
        // })
      })

  // it should test, if we provide right data bt with wrong credential, it should give error on ui
  it('Test Imap Form With Right Data with wrong credetial', function() {
    // cy.get('#imapForm').within(function() {
    //   cy.get('#FormEmail input')
    //     .type(data.email).should('have.value', data.email);
    //   cy.get('#FormPassword input')
    //     .type(data.password).should('have.value', data.password);
    //   cy.get('#FormDate #date')
    //     .type(data.date).should('have.value', data.date);
    //   cy.get('#FormButton button').should('have.attr', 'ng-reflect-disabled', 'false');
    //   cy.get('#FormButton button').click().wait('@apiResponse');
    //   cy.get('#showError').should('have.class', 'error');
    // })

  })


  // it should test if we provide right data to form, save button must be enable, and fire api and got response if api giving error , show it to user (like same imap if already added)
  it('Test Imap Form With Already Used Data', function() {
    // cy.get('#imapForm').within(function() {
    //   cy.get('#FormEmail input')
    //     .type(data.imapUsedEmail).should('have.value', data.imapUsedEmail);
    //   cy.get('#FormPassword input')
    //     .type(data.imapUsedPassword).should('have.value', data.imapUsedPassword);
    //   cy.get('#FormDate #date')
    //     .type(data.date).should('have.value', data.date);
    //   cy.get('#FormButton button').should('have.attr', 'ng-reflect-disabled', 'false');
    //   cy.get('#FormButton button').click().wait('@apiResponse');
    //   cy.get('#showError').should('have.class', 'error');
    // })
  })
  //      //it should test if we provide right data to form, save button must be enable, and fire api and got response, data must be added in imap table,and this imap must be inactive by default
  it('Test Imap Form With New Data', function() {
<<<<<<< HEAD
    // cy.get('#imapForm').within(function() {
    //   cy.get('#FormEmail input')
    //     .type(data.newImapEmail).should('have.value', data.newImapEmail);
    //   cy.get('#FormPassword input')
    //     .type(data.newImapPassword).should('have.value', data.newImapPassword);
    //   cy.get('#FormDate #date')
    //     .type(data.date).should('have.value', data.date);
    //   cy.get('#FormButton button').should('have.attr', 'ng-reflect-disabled', 'false');
    //   cy.get('#FormButton button').click()
    // }).wait('@apiResponse')
    // cy.get('#testhr69').first().contains(`testhr69@gmail.com`)
=======
    cy.get('#imapForm').within(function() {
      cy.get('#FormEmail input')
        .type(data.newImapEmail).should('have.value', data.newImapEmail);
      cy.get('#FormPassword input')
        .type(data.newImapPassword).should('have.value', data.newImapPassword);
      cy.get('#FormDate #date')
        .type(data.date).should('have.value', data.date);
      cy.get('#FormButton button').should('have.attr', 'ng-reflect-disabled', 'false');
      cy.get('#FormButton button').click().wait('@apiResponse')
    })
    cy.get('#testhr69').first().contains(`testhr69@gmail.com`)
>>>>>>> d70f8e03edb7c01d963ef08b127b0b76f51830c7
  })
  //      //it will test imap table state, pick any imap details with diactive status from imap tabel, test it can be remove and remove button not disable. if click on remove button this imap record must be deleted from table and api.
  it('Test imap table remove imap record', function() {
    // cy.get('#tbody tr:first md-icon').then(($state) => {
    //   const status = Cypress._.chain($state).take('property', 'class').value();
    //   console.log(status);
    //   if (status[0].className === "material-icons off") {
    //     cy.get('#tbody tr:first>td button').should('have.attr', 'ng-reflect-disabled', 'false');
    //     cy.get('#tbody tr:first>td:first').then(data => {
    //       const email = data[0].innerText;
    //       cy.get('#tbody tr:first>td button').click().wait('@deleteImap');
    //       cy.get('#tbody tr:first>td:first').should('not.have.text', email);
    //     })
      // }
    // })

  })

  //    //pick any record from imap table, check its status if active make is deactive and vice versa, also it will show error if any comming
  it('Test imap table status active to diactive and vice versa', function() {
    // cy.get('#tbody tr:first md-icon').then(($state) => {
    //   const status = Cypress._.chain($state).take('property', 'class').value();
    //   if (status[0].className === "material-icons on") {
    //     cy.get('#tbody tr:first>td #switchState').click();
    //     cy.get('#tbody tr:first>td #switchState').should('have.class', 'off');
    //     cy.get('#tbody tr:first>td button').should('have.attr', 'ng-reflect-disabled', 'false');
    //   } else if (status[0].className === "material-icons off") {
    //     cy.get('#tbody tr:first>td #switchState').click().wait('@updateStatus');
    //     cy.get('#tbody tr:first>td #switchState').should('have.class', 'on');
    //     cy.get('#tbody tr:first>td button').should('have.attr', 'ng-reflect-disabled', 'true');
    //   }
    // });
  })

     //it will test imap records with active status can't be removed
     it('Test imap table with active status cant be removed', function () {
  //     cy.get('#tbody tr:first md-icon').then(($state) => {
  //         const status = Cypress._.chain($state).take('property', 'class').value();
  //         if(status[0].className === "material-icons on"){
  //             cy.get('#tbody tr:first>td button').should('have.attr', 'ng-reflect-disabled', 'true');
  //         }
  //  })

  })
})
