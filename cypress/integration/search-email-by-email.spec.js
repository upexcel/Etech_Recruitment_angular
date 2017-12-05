 import * as data from '../../cypress.json';
describe('search emails by subject', function() {
	beforeEach(function() {
	    cy.login(data.email, data.password);
    });
	afterEach(function() {
	    cy.logout();
	});

	//visit inbox page and fetch latest emails
    it('visit inbox page and fetch latest email', function () {
    	// cy.server()
      //   cy.route('GET',data.apiUrl+`/email/fetchByButton**`).as('fetch_emails')
      //   cy.get("#fetchEmails").click();
      //   cy.wait('@fetch_emails');
    })

    //search email by typing subject, check send email sucessfully fetched or not
    it('search email by typing subject', function () {
    	// cy.server();
  		// cy.route('PUT',data.apiUrl+`/email/fetch/**`).as('get_mails');
    	// cy.get("#option").click().then(function() {
    	// 	cy.get("#md-option-0").click();
    	// 	cy.get("#cdk-overlay-0").should("not.be.visible");
    	// })
    	// cy.get("#input_search").click().type(data.myEmail);
    	// cy.get("#search_sub").click().wait('@get_mails');
    	// cy.get('.emailstyle p').contains(data.myEmail);
    })
})
