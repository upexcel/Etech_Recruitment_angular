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
        // cy.addSmtp(data.smtpUsedEmail, data.smtpPassword, data.serverName, data.portNo);
        cy.visit(data.baseUrl + "/core/setting/jobProfileTags");
        cy.addJobprofile(data.jobprofile);
        cy.addJobprofile(data.php_job);
        cy.addJobprofile(data.node_job);
        
    })

    //send mail and visit inbox page and fetch latest emails
    it('visit inbox page and fetch latest email', function () {
        cy.addSmtp(data.smtpUsedEmail, data.smtpPassword, data.serverName, data.portNo)
        cy.sendMail()
        cy.visit(data.baseUrl + "/core/inbox");
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