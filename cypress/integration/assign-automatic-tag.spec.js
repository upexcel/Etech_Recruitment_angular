import * as data from '../../cypress.json';
describe('Assign Automatic tags', function() {
    beforeEach(function() {
        cy.login(data.email, data.password);
        // cy.visit(data.baseUrl + "/core/setting/tagsetting");
    });
    afterEach(function() {
        cy.logout();
    });
    
    // add smtp and a job probile
    it('Add a job profile', function () {
        cy.visit(data.baseUrl + "core/setting/emailtemplate");
        cy.get("#addEmailTemplateButton").click();
        cy.get("#templateName").type(data.temp_name);
        cy.get("#subject").type(data.temp_sub);
        cy.get("#tempBody").type(data.temp_body);
        cy.get("#save").click();
        cy.get("#addEmailTemplateForm").should('not.be.visible');
        cy.get(".set-pos:last ").contains("TEST").click();
        cy.get(".mat-input-infix:first input").type("testhr69@gmail.com")
        cy.get(".mat-input-infix:last input").type("testhr")
        // cy.get('.m-b mat-rais').should('have.attr', 'ng-reflect-disabled', 'false');
        cy.get("#save_var").click();
        cy.get("#set_var").click();
        cy.get("#send_mail").click()
        // cy.get(".mat-raised-button").contains("SEND MAIL")
        // cy.addSmtp(data.smtpUsedEmail, data.smtpPassword, data.serverName, data.portNo);
        cy.visit(data.baseUrl + "/core/setting/jobProfileTags");
        cy.addJobprofile(data.jobprofile);
        cy.addJobprofile(data.php_job);
        cy.addJobprofile(data.node_job);
        
    })

    //send mail and visit inbox page and fetch latest emails
    it('visit inbox page and fetch latest email', function () {
        // cy.addSmtp(data.smtpUsedEmail, data.smtpPassword, data.serverName, data.portNo)
        // cy.sendMail()
        // cy.visit(data.baseUrl + "/core/inbox");
        cy.fetchLatestMails();
    })

    //check send email sucessfully fetched or not
    it('check email is assigned to a tag or not', function () {
        cy.server()
        cy.route('PUT',data.apiUrl+`/email/fetch/**`).as('get_emails')
        cy.get('#test').next().find('a:first').should('not.have.text', 'All (0/0)');
        cy.get('#test').next().find('a:first').click({force: true}).then(function() {
            cy.wait('@get_emails');
            cy.get('.emailstyle p').contains(data.myEmail);
        });
    })

    // delete job profile
    it('delete job profile', function () {
        cy.visit(data.baseUrl + "/core/setting/jobProfileTags");
        cy.deleteJobprofile(data.jobprofile);
        cy.deleteJobprofile(data.php_job);
        cy.deleteJobprofile(data.node_job);
    })
})