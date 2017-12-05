import * as data from '../../cypress.json';
describe('Search emails', function() {
	beforeEach(function() {
        cy.login(data.email, data.password);
    });
    afterEach(function() {
        cy.logout();
    });

    //visit inbox page and fetch latest emails
    it('visit inbox page and fetch latest email', function () {
    	// cy.fetchLatestMails();
    })

    //check send email sucessfully fetched or not
    it('search email by typing subject', function () {
    	// cy.server();
  		// cy.route('PUT',data.apiUrl+`/email/fetch/**`).as('get_mails');
    	// cy.get("#option").click().then(function() {
    	// 	cy.get("#md-option-1").click();
    	// 	cy.get("#cdk-overlay-0").should("not.be.visible");
    	// })
    	// cy.get("#input_search").click().type(data.jobprofile);
    	// cy.get("#search_sub").click().wait('@get_mails');
    	// cy.get('.emailstyle:first h5').contains(data.jobprofile);
    })

})
