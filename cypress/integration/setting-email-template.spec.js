import * as data from '../../cypress.json';

describe('Setting/Email Template Page Test', function () {
  beforeEach(function() {
    cy.login(data.email, data.password);
    cy.server()
    cy.route({ method: 'GET', url: `http://localhost:8091/systemVariable/**` }).as('getSystemVariable')
    cy.route({ method: 'GET', url: `http://localhost:8091/template/**` }).as('getTemplate')
    cy.route({ method: 'POST', url: `http://localhost:8091/template/**` }).as('postTemplate')
  })
  afterEach(function() {
    cy.logout();
  })
    //it should visit setting/smtp page
    it('Visits the Setting/Email Template Page', function () {
      cy.visit(data.baseUrl + 'core/setting/emailtemplate');
      cy.wait('@getTemplate')
      cy.get('#addEmailTemplate #addEmailTemplateButton').should('be.exist');
     })

    //add a new template, click on delete of last added email template. it should open a confirm dialouge with option 'yes' or 'no'. Test if user hit no, email temaplate list remain same. Test if user hit yes option, api will fire and email list must be updated.
    it('Test delete button functionality', function () {
      cy.visit(data.baseUrl + 'core/setting/emailtemplate');
      cy.addEmailTemplate();
      cy.get('#addEmailTemplateForm').should('not.be.visible')
      cy.wait('@postTemplate')
      cy.wait('@getTemplate')
      cy.login(data.email, data.password);
      cy.visit(data.baseUrl + 'core/setting/emailtemplate');
      cy.deleteTemplate();
     })

    //add a new email template, click on test button, it should open test email popup with 2 fields email and candidate name.
    //Test if email/candidate's name field invalid then save button must be disable. test If user form is valid save button enable and if click on it test send email popup will open.
    //Test Send email pop have pre define 'To'/'Template Name'/'Template Subject'/'Template body' value already filled.
    //Test if 'Template body' have any #variable_name and user click on 'Set Variable' it should open a set variable form.
    //Test if set variable form is invalid preview button must be disable and vise versa.
    //Test if set variable form have valid data and user click on 'Preview Mail', it should open a preview mail page
    //test  Preview email have subject and body, and a option to 'Send Email'. If user click and popup sould be closed. If user click on close it also close the popup.
    it('test Email template test funcionality', function () {
      cy.addEmailTemplate();
      cy.get('#addEmailTemplateForm').should('not.be.visible')
      cy.wait('@postTemplate')
      cy.wait('@getTemplate')
      cy.login(data.email, data.password);
      cy.visit(data.baseUrl + 'core/setting/emailtemplate');
      cy.get('#templatePanel').should('be.exist')
      cy.get('#templates:first app-single-template md-card-title').contains("test");
      cy.get('#templates:first app-single-template md-card-subtitle').contains("Subject: testSubject");
      cy.get('#templates:first #testTemplate').click();
      cy.get('#testTemplateForm').should('be.visible');
      cy.get('#testTemplateForm #save').should('be.disabled');
      cy.get('#testTemplateForm #email').type(data.userEmail);
      cy.get('#testTemplateForm #save').should('be.disabled');
      cy.get('#testTemplateForm #candidateName').type("test")
      cy.get('#testTemplateForm #save').should('be.enabled');
      cy.get('#testTemplateForm #save').click()
      cy.get('#sendMailForm').should('be.visible');
      cy.get('#sendMailForm span:first').contains("test");
      cy.get('#sendMailForm .width-75 input').should('have.value','testSubject');
      cy.get('#sendMailForm p:first').contains("tempBody");
      cy.get('#setVariable').should('be.enabled');
      cy.get('#setVariable').click()
      cy.get('.main-container').should('be.visible');
      cy.get('.main-container table tr:first>td').contains('Revert Information testSubject')
      cy.get('table tr:last ').contains('tempBody')
      cy.get('button:last').click()
      cy.wait('@postTemplate')
      cy.get('.main-container').should('not.be.visible');
      cy.deleteTemplate();
     })
})
