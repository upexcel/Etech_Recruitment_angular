// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import * as data from '../../cypress.json';

Cypress.Commands.add ('login', function(email,password) {
  cy.visit(data.baseUrl+'/login');
    cy.get('input[type="email"]').type(email)
    cy.get('input[type="password"]').type(password)
    cy.get('button.mat-raised-button').click().wait(500);
    cy.url().should('eq',data.baseUrl+'/core/inbox')
});
Cypress.Commands.add('logout', function() {
  cy.get('#toolbar button#sideNav').click()
  cy.get('md-sidenav div#logout').click().wait(500);
  cy.url().should('eq',data.baseUrl+'/');
});
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
