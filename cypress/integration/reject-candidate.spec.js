import * as data from '../../cypress.json';
describe('reject candidate', function() {

    beforeEach(function() {
        cy.login(data.email, data.password);
    });
    afterEach(function() {
        cy.logout();
    });

    //it should send a mail from smtp server setting page
    it('send mail', function () {
    	cy.sendMail();
    })

    //make a job profile
    it('make a job profile', function () {
    	cy.addJobprofile(data.jobprofile);
    })

    //fetch latest emails in inbox
    it('fetch latest emails', function () {
        cy.fetchLatestMails();
    })

    // it should visit in jobprofile and see if sent mail is there or not and then click on reject button
    it('reject the candidate', function () {
        cy.server()
        cy.route('PUT',data.apiUrl+`/email/fetch/**`).as('get_emails')
        cy.get('.subenav').contains(data.jobprofile);
        cy.get('#test').next().find('a:first').should('not.have.text', 'All (0/0)');
        cy.get('#test').next().find('a:first').click({force: true}).then(function() {
            cy.wait('@get_emails');
            cy.get('#inboxTag').contains("Reject").click();
        })
    })

    //check if mail found in rejected option of this job profile
    it('email fetched in reject or not', function () {
        cy.server()
        cy.route('PUT',data.apiUrl+`/email/fetch/**`).as('get_emails')
        cy.get('#test').next().find('a').contains("Reject").click().wait('@get_emails').then(function() {
            cy.get('.emailstyle:first p').contains(data.myEmail);
        })
    })

    //delete job profile
    it('delete job profile', function () {
        cy.visit(data.baseUrl + "/core/setting/jobProfileTags");
        cy.deleteJobprofile(data.jobprofile);
    })
})
