import * as data from '../../cypress.json';

Cypress.Commands.add('login', function(email, password) {
  cy.visit(data.baseUrl + '/login');
  cy.get('#loginForm #loginEmail').type(email)
  cy.get('#loginForm #loginPassword').type(password)
  cy.get('#loginForm #login').click();
  cy.url().should('eq', data.baseUrl + '/core/inbox')
});
Cypress.Commands.add('logout', function() {
  cy.get('#toolbar button#sideNav').click().then(function() {
    cy.get('md-sidenav div#logout').click()
    cy.url().should('eq', data.baseUrl + '/')
  })

});
