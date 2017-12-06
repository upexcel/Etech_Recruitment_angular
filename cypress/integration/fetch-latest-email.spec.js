import * as data from '../../cypress.json';
describe('Fetch latest emails', function() {
	 beforeEach(function() {
        cy.login(data.email, data.password);
    });
    afterEach(function() {
        cy.logout();
    });

    //send mail and visit inbox page and fetch latest emails
    it('visit inbox page and fetch latest email', function() {
      //   cy.sendMail()
      //   cy.visit(data.baseUrl + "/core/inbox")
    	// cy.server()
      //   cy.route('GET',data.apiUrl+`/email/fetchByButton**`).as('fetch_emails')
      //   cy.get("#fetchEmails").click();
      //   cy.wait('@fetch_emails')
    })

    // check send email sucessfully fetched or not
    it('check email fetched sucessully or not', function() {
        // cy.get('.emailstyle p').contains(data.myEmail);
    })

})
