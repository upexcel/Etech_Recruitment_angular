import * as data from "../../cypress.json";
describe("Inbox/Inbox Side Nav Page Default tag Test", function() {

  beforeEach(function() {
    cy.login(data.email, data.password);
  });
  afterEach(function() {
    cy.logout();
  });

  it("Visits the Inbox Page add Default sub tag", function() {
     cy.get("#subtitle #112").click();
     cy.get('#title input')
       .type(data.defaultTagTitle).should('have.value',data.defaultTagTitle);
        cy.get('#subject input')
       .type(data.defaultTagTitle).should('have.value',data.defaultTagTitle);
        cy.get('#save').click()
         cy.get("md-dialog-container").should("not.be.visible");
          cy.get("#subChild #subTag #112").contains('Default Tags');
  });
   it("checks on click toggle shows default tags", function() {
      cy.get("#subChild #subTag #arrowdown:first").click();
      cy.get("#subChild #subTag #defaultTag #addedtag:first").contains(data.defaultTagTitle);
      cy.get("#subChild #subTag #arrowup:first").click();
  });
});
