import * as data from '../../cypress.json';
describe('Fetch latest emails', function() {
	 beforeEach(function() {
        cy.login(data.email, data.password);
    });
    afterEach(function() {
        cy.logout();
    });

    //it should visit setting/imap seting page
    it('Add imap email and change their status', function() {
    	cy.visit(data.baseUrl + "/core/setting/imap");
        cy.addImap(data.newImapEmail, data.newImapPassword, data.date);
        cy.get("#switchState").click();
    })

    //visit inbox page and fetch latest emails
    it('visit inbox page and fetch latest email', function() {
    	cy.server()
        cy.route('GET',data.apiUrl+`/email/fetchByButton**`).as('fetch_emails')
        cy.get("#fetchEmails").click();
        cy.wait('@fetch_emails')
    })

    //check send email sucessfully fetched or not
    it('check email fetched sucessully or not', function() {
        cy.get('.emailstyle p').contains(data.myEmail);
    })

    // delete imap credentials
    it('delete imap email credentials', function() {
        cy.visit(data.baseUrl + "/core/setting/imap");
        cy.get("#switchState").click();
        cy.get("#tbody tr:first>td button").click()
    })

})