import * as data from '../../cypress.json';

describe('Setting/Email Template, Add Email Template Page Test', function() {

  beforeEach(function() {
    cy.login(data.email, data.password);
  })
  afterEach(function() {
    cy.logout();
  })
  //it should visit setting/email template page
  it('Visits the Setting/Email Template Page', function() {
    cy.visit(data.baseUrl + 'core/setting/emailtemplate');
    cy.get('#addEmailTemplate #addEmailTemplateButton').should('be.exist')
  })

  //it should test page have a button for add new email template, click on add new template button it should open create template form
  it('Add new email template function test', function() {
    cy.visit(data.baseUrl + 'core/setting/emailtemplate');
    cy.get('#addEmailTemplate #addEmailTemplateButton').click()
    cy.get('#addEmailTemplateForm').should('be.exist')
    cy.get('#addEmailTemplateForm #back').click()
  })

  //test their must be a system variables list with data
  it('Test system variables list presence', function() {
    cy.visit(data.baseUrl + 'core/setting/emailtemplate');
    cy.get('#addEmailTemplate #addEmailTemplateButton').click()
    cy.get('#addEmailTemplateForm').should('be.exist')
    cy.get('#addEmailTemplateForm #systemVariableContent').then(function() {
      cy.get('#systemVariableContent button').should('be.exist')
    })
    cy.get('#addEmailTemplateForm #back').click()
  })

  //test their must be a user variables list
  it('Test user variables list presence', function() {
    cy.visit(data.baseUrl + 'core/setting/emailtemplate');
    cy.get('#addEmailTemplate #addEmailTemplateButton').click()
    cy.get('#addEmailTemplateForm').should('be.exist')
    cy.get('#addEmailTemplateForm #userVariableContent').should('be.exist')
    cy.get('#addEmailTemplateForm #back').click()
  })

  //it should test if form is empty or invalid then form submit button must be disable
  it('Test Add new email template Form With Empty/Invalid Data', function() {
    cy.visit(data.baseUrl + 'core/setting/emailtemplate');
    cy.get('#addEmailTemplate #addEmailTemplateButton').click()
    cy.get('#addEmailTemplateForm').should('be.exist')
    cy.get('#addEmailTemplateForm #save').should('have.attr', 'disabled');    
    cy.get('#addEmailTemplateForm #templateName').type("test")
    cy.get('#addEmailTemplateForm #save').should('have.attr', 'disabled');    
    cy.get('#addEmailTemplateForm #subject').type("testSubject")
    cy.get('#addEmailTemplateForm #save').should('have.attr', 'disabled');    
    cy.get('#addEmailTemplateForm #back').click()
    cy.get('#addEmailTemplateForm').should('not.be.visible')
  })

  // it should test back button functionality, if we hit back button popup must be close and nothing added in email template list
  it('Test Add new email template Form back button', function() {
    cy.visit(data.baseUrl + 'core/setting/emailtemplate');
    cy.get('#addEmailTemplate #addEmailTemplateButton').click()
    cy.get('#addEmailTemplateForm').should('be.exist')
    cy.get('#addEmailTemplateForm #templateName').type("test")
    cy.get('#addEmailTemplateForm #subject').type("testSubject")
    cy.get('#addEmailTemplateForm #tempBody').type("tempBody")    
    cy.get('#addEmailTemplateForm #back').click()
    cy.get('#addEmailTemplateForm').should('not.be.visible')
    cy.get('#templatePanel').should('be.exist')
    cy.get('#templates:first app-single-template md-card-title').should("not.have.text","test");
    cy.get('#templates:first app-single-template md-card-subtitle').should("not.have.value","Subject: testSubject");      
  })

  //it should test if we provide right data to form, save button must be enable, and fire api and got response if api giving success , so data must be added in email template list, if any error show it to user
   it('Test Add new email template Form With Right Data', function() {
    cy.visit(data.baseUrl + 'core/setting/emailtemplate');
    cy.get('#addEmailTemplate #addEmailTemplateButton').click()
    cy.get('#addEmailTemplateForm').should('be.exist')
    cy.get('#addEmailTemplateForm #templateName').type("test")
    cy.get('#addEmailTemplateForm #subject').type("testSubject")
    cy.get('#addEmailTemplateForm #tempBody').type("tempBody")
    cy.server()
    cy.route('GET', `**`).as('get')
    cy.get('#addEmailTemplateForm #save').click()
    cy.get('#addEmailTemplateForm').should('not.be.visible')
    cy.wait('@get')
    cy.get('#templatePanel').should('be.exist')
    cy.get('#templates:first app-single-template md-card-title').contains("test");
    cy.get('#templates:first app-single-template md-card-subtitle').contains("Subject: testSubject");      
  })
})
