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
        cy.get("#switchState").click();
    })
    // add a job probile
    it('Add a job profile', function () {
        cy.addJobprofile();
    })

    //visit inbox page and fetch latest emails
    it('visit inbox page and fetch latest email', function () {
        cy.server()
        cy.route('GET',`http://localhost:8091/email/fetchByButton**`).as('fetch_emails')
        cy.get("#fetchEmails").click();
        cy.wait('@fetch_emails')
    })

    //check send email sucessfully fetched or not
    it('check email is assigned to a tag or not', function () {
        cy.get('#subnav .sub-title').contains(data.jobprofile);
        cy.get('#subnav .subenav:first').find('a:first').should('not.have.text', 'all(0/0)');
        cy.get('#subnav .subenav:first').find('a:first').click().then(function() {
            cy.get('.emailstyle p').contains('ashutosh_m@excellencetechnologies.in')
        })
    })

    // delete imap credentials
    it('delete imap email credentials', function () {
        cy.visit(data.baseUrl + "/core/setting/imap");
        cy.get("#switchState").click();
        cy.get("#tbody tr:first>td button").click()

    })

})