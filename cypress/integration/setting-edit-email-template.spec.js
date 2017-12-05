import * as data from '../../cypress.json';
describe('Setting/Email Template, Edit Email Template Page Test', function() {

    beforeEach(function() {
        cy.login(data.email, data.password);
    });
    afterEach(function() {
        cy.logout();
    });

    // it should visit setting/email template page
    it('Visits the Setting/Email Template Page', function() {
      cy.visit(data.baseUrl + "core/setting/emailtemplate");
      cy.get(".content").should("be.visible");
    })

    // add a email template, and click on last added template's Edit button, it should open edit popup.
    it('Test edit button functionality', function() {
        cy.visit(data.baseUrl + "core/setting/emailtemplate");
        cy.get("#addEmailTemplateButton").click();
        cy.get("#templateName").type(data.temp_name);
        cy.get("#subject").type(data.temp_sub);
        cy.get("#tempBody").type(data.temp_body);
        cy.get("#save").click();
        cy.get("#addEmailTemplateForm").should('not.be.visible');
    })

    //in edit email popup test all fields having predefine values.
    it('Test edit email form have already value', function() {
        cy.visit(data.baseUrl + "core/setting/emailtemplate");
        cy.get(".set-pos:last ").contains("edit").click();
        cy.get("md-dialog-container").should('be.visible');
        cy.get('input[id^="md-input-"]:first').should('have.value',data.temp_name);
        cy.get('input[id^="md-input-"]:last').should('have.value',data.temp_sub);
        cy.get("#tempBody").should('have.value',data.temp_body);
        cy.get('#back').click()
        cy.get("md-dialog-container").should('not.be.visible');
    })

    //test their must be a user variables list
    it('Test user variables list presence', function () { 
        cy.visit(data.baseUrl + 'core/setting/emailtemplate');
        cy.get('#addEmailTemplate #addEmailTemplateButton').click()
        cy.get('#addEmailTemplateForm').should('be.exist')
        cy.get('#addEmailTemplateForm #userVariableContent').should('be.exist')
        cy.get('#addEmailTemplateForm #back').click()
    })

    //it should test back button functionality, if we hit back button popup must be close and nothing will update in email template list
    it('Test edit email template Form back button', function () {
        cy.visit(data.baseUrl + "core/setting/emailtemplate");
        cy.get('#addEmailTemplate #addEmailTemplateButton').click();
        cy.get('#back').click();
        cy.get("md-dialog-container").should('not.be.visible');
        cy.get(".col-md-6 .mat-card-title").contains(data.temp_name);
        cy.get(".col-md-6 .mat-card-subtitle").contains(data.temp_sub);
    })

    // //it should test if user make form empty or invalid then form submit button must be disable, only back button enable
    // it('Test edit new email template Form With Empty/Invalid Data', function () {
    //     cy.visit(data.baseUrl + "core/setting/emailtemplate");
    //     cy.get(".set-pos:last ").contains("edit").click();
    //     cy.get("md-dialog-container").should('be.visible');
    //     cy.get('input[id^="md-input-"]:first').clear();
    //     cy.get('input[id^="md-input-"]:last').clear();
    //     cy.get("#tempBody").clear();
    //     cy.get('#update').should('have.attr', 'disabled');
    // })

    //it should test if user update form data, and click update, and fire api and got response if api giving success , so data must be updated in email template list
    it('Test update email template Form With new Data', function () { 
        cy.server();
        cy.route('PUT',data.apiUrl+`/template/update/**`).as('update');
        cy.route('GET',data.apiUrl+`/template/get/**`).as('get_temp');
        cy.visit(data.baseUrl + "core/setting/emailtemplate");
        cy.get(".set-pos:last ").contains("edit").click();
        cy.get("md-dialog-container").should('be.visible');
        cy.get('input[id^="md-input-"]:first').clear().type(data.new_temp_name);
        cy.get('input[id^="md-input-"]:last').clear().type(data.new_temp_sub);
        cy.get("#tempBody").clear().type(data.new_temp_body);
        cy.get('#update').click()
        cy.get("md-dialog-container").should('not.be.visible');
        cy.wait('@update');
        cy.wait('@get_temp');
        cy.get(".col-md-6 .mat-card-title").contains(data.new_temp_name);
        cy.get(".col-md-6 .mat-card-subtitle").contains(data.new_temp_sub);
    })

//it should test back button functionality, if we hit back button popup must be close and nothing will update in email template list
    it('delete added template', function () { 
        cy.visit(data.baseUrl + "core/setting/emailtemplate");
        cy.get(".col-md-6").contains("delete").click();
        cy.get("#confirmYes").click();
    })
})