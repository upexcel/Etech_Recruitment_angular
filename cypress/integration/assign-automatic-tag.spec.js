import * as data from '../../cypress.json';
describe('Assign Automatic tags', function() {
    beforeEach(function() {
        cy.login(data.email, data.password);
        // cy.visit(data.baseUrl + "/core/setting/tagsetting");
    });
    afterEach(function() {
        cy.logout();
    });
    //it should visit setting/imap seting page
    it('Add imap email and change their status', function () {
        cy.addImap();
        cy.server()
        cy.route('POST',`http://localhost:8091/`).as('getImap')
        cy.route('GET', `http://localhost:8091/`).as('getImap')
        // cy.wait();
        cy.get("#switchState").click();
    })
    // add a job probile
    it('Add a job profile', function () {
        cy.addJobprofile();
    })

    //visit inbox page and fetch latest emails
    it('visit inbox page and fetch latest email', function () {
        cy.server()
        cy.route('POST',`http://localhost:8091/`).as('fetch_emails')
        cy.get("#fetchEmails").click();
        // cy.wait(5000)
    })

    //check send email sucessfully fetched or not
    it('check email is assigned to a tag or not', function () {

    })

    // delete imap credentials
    it('delete imap email credentials', function () {

        
    })

})