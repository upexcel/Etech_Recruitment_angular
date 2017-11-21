import * as data from '../../cypress.json';
describe('Setting/SMTP Page Test', function () {
    beforeEach(function() {
        cy.login(data.email,data.password);
        cy.visit(data.baseUrl+'/core/setting/smtp');
     })
     afterEach(function(){
      cy.logout();
    })
   // it should visit setting/smtp page
    it('Visits the Setting/SMTP Page', function () { 
        // cy.visit(data.baseUrl+'/core/setting/smtp');
    })

   //it should test if form is empty then form submit button must be disable
   it('Test smtp Form With Empty Data', function () {
       cy.get('#smtpForm').within(function () {
           cy.get('#smtpFormUserEmail input').should('have.attr', 'placeholder', 'Email/User Name');
           cy.get('#smtpFormSendEmail input').should('have.attr', 'placeholder', 'Email (send via)');
           cy.get('#smtpFormPassword input').should('have.attr', 'placeholder', 'Password');
           cy.get('#smtpFormServerName input').should('have.attr', 'placeholder', 'SMTP Server');
           cy.get('#smtpFormPort input').should('have.attr', 'placeholder', 'Server port');
           cy.get('#smtpFormRadio #option1').should('have.attr','checked');
           cy.get('#smtpFormRadio #option2').should('not.have.attr','checked');
           cy.get('#smtpFormSave button').should('have.attr', 'ng-reflect-disabled', 'true')
        })
    })

//      //it should test, user name field, email field, password field, smtp server field, server port field are required and valid, if any of these field is not valid submit button must be disabled
it('Test smtp Form With Wrong Data', function () { 
         cy.get('#smtpForm').within(function () {
             cy.get('#smtpFormUserEmail input')
             .type('fakeEmail').should('have.value', 'fakeEmail');
             cy.get('#smtpFormSendEmail input')
             .type('fakeEmail').should('have.value', 'fakeEmail');
             cy.get('#smtpFormPassword input')
             .type('password').should('have.value', 'password');
             cy.get('#smtpFormServerName input')
             .type('smtp').should('have.value','smtp');
             cy.get('#smtpFormSave button').should('have.attr', 'ng-reflect-disabled', 'true')
            })  
        })

//     // //it should test, if we provide right data but with wrong credential, submit button must be enable and if click submit it should give error on ui
it('Test smtp Form With Right Data with wrong credetial', function () { 
        cy.get('#smtpForm').within(function () { 
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
            cy.get('#smtpFormRadio #option1').click();
            cy.get('#smtpFormSave button').should('have.attr', 'ng-reflect-disabled', 'false');
            cy.get('#smtpFormSave button').click().wait(1000);
            cy.get('#showError').should('have.class', 'error');
        })
    })

//     // //it should test if we provide right data to form, save button must be enable, and fire api and got response if api giving success , so data must be added in smtp table, if any error show it to user (like same smtp if already added, if any), and this smtp must be status inactive by default
    //it should test if we provide right data to form, save button must be enable, and fire api and got response if any error show it to user (like same smtp if already added, if any).
    it('Test smtp Form With Used Smtp  Data', function () {
         cy.get('#smtpForm').within(function () {
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
             cy.get('#smtpFormRadio #option1').click();
             cy.get('#smtpFormSave button').should('have.attr', 'ng-reflect-disabled', 'false');
             cy.get('#smtpFormSave button').click().wait(3000);
             cy.get('#showError').should('have.class', 'error');
            }) 
        })
//       // //it should test if we provide right data to form, save button must be enable, and fire api and got response if api giving success , so data must be added in smtp table, and this smtp must be status inactive by default
it('Test smtp Form With New Smtp  Data', function () { 
         cy.get('#smtpForm').within(function () {
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
             cy.get('#smtpFormRadio #option1').click();
             cy.get('#smtpFormSave button').should('have.attr', 'ng-reflect-disabled', 'false');
             cy.get('#smtpFormSave button').click().wait(3000);
            }) 
            cy.get('#tbody tr:first>td:first').should('have.text', data.newSmtpEmail);
        })
        //test active status record not be deleted
        it('Test active status record not be deleted', function () {
        cy.get('#tbody tr:first #status').then(($state)=>{
            const status = Cypress._.chain($state).take('property', 'class').value();
            if(status[0].className === "on"){
                cy.get('#tbody tr:first #remove').should('have.attr', 'ng-reflect-disabled', 'true');
             }
      })
    })
        
//     test if number of record are more than 1, only 1 record can be activated at a time. Click to a deactive record to make  it active and test all other record must be deactivated.
         it('Test only a single record can be activated', function () { 
            cy.get('#tbody tr:first #status').then(($state)=>{
            const status = Cypress._.chain($state).take('property', 'class').value();
            if(status[0].className === "on"){
              cy.get('#tbody tr:last #status').should('have.class', 'off');
              cy.get('#tbody tr:last #status').click();
              cy.get('#tbody tr:last #status').should('have.class', 'on');
              cy.get('#tbody tr:first #status').should('have.class', 'off');
             }else if(status[0].className === "off"){
                cy.get('#tbody tr:last #status').should('have.class', 'on'); 
                cy.get('#tbody tr:first #status').click();
                cy.get('#tbody tr:last #status').should('have.class', 'off');
                cy.get('#tbody tr:first #status').should('have.class', 'on');
             }
             })
         })
      // test deactive status record can be deleted
      it('Test deactive status record can be deleted', function () { 
          cy.get('#tbody tr:last #status').then(($state)=>{
              const status = Cypress._.chain($state).take('property', 'class').value();
              if(status[0].className === "off"){
                  cy.get('#tbody tr:last #status').click()
                  cy.get('#tbody tr:last #remove').should('have.attr', 'ng-reflect-disabled', 'true');
                  cy.get('#tbody tr:first #status').should('have.class', 'off');
                  cy.get('#tbody tr:first #remove').should('have.attr', 'ng-reflect-disabled', 'false');
                  cy.get('#tbody tr:first>td:first').then((data)=>{
                      const email=data[0].innerText;
                      cy.get('#tbody tr:first #remove').click().wait(1000)
                      cy.get('#tbody tr:first>td:first').should('not.have.text', email);
                     })
                    }
                })
            })
    //  test any active record, fire api to test record
     it('Test a smtp record', function () { 
         cy.get('#tbody tr:first #test').click().wait(2000)
         cy.get('simple-snack-bar').should('have.class', 'mat-simple-snackbar');
     })
})