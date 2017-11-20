import * as data from "../../cypress.json";

describe("Login Page Test", function() {
  it("Visits the Login Page", function() {
    cy.visit(data.baseUrl + "/login");
    cy.get(".logo .img-responsive").should("have.attr", "src", "assets/logo.png");
    cy.get("form").within(function() {
      cy.get("#loginEmail").should("have.attr", "placeholder", "Email");
      cy.get("#loginPassword").should("have.attr", "placeholder", "Password");
      cy.get("#login").should("have.attr", "ng-reflect-disabled", "true");
      cy.get("#loginCheckbox").click();
      cy.get("#loginCheckbox").should("have.class", "mat-checkbox-checked");
    });
  });
  it("Test Login Form With Wrong Data", function() {
    cy.visit(data.baseUrl + "/login");
    cy.get("form").within(function() {
      cy.get("#loginEmail").type("fakeEmail").should("have.value", "fakeEmail");
      cy.get("#loginPassword").type("password").should("have.value", "password");
      cy.get("md-error").should("have.class", "mat-input-error");
      cy.get("#login").should("have.attr", "ng-reflect-disabled", "true");
    });
  });
  it("Test Login Api With Wrong Data", function() {
    cy.visit(data.baseUrl + "/login");
    cy.get("form").within(function() {
      cy.get("#loginEmail").type("example@gmail.com").should("have.value", "example@gmail.com");
      cy.get("#loginPassword").type("password").should("have.value", "password");
      cy.get("#login").click();
      cy.get("#loginSpinner").should("have.class", "spin");
      cy.get("#loginError").should("have.class", "error");
    });
  });
  it("Test Login Api With Right Data", function() {
    cy.visit(data.baseUrl + "/login");
    cy.get("form").within(function() {
      cy.get("#loginEmail").type(data.email).should("have.value",data.email);
      cy.get("#loginPassword").type(data.password).should("have.value",data.password);
      cy.get("#login").should("have.attr", "ng-reflect-disabled", "false");
      cy.get("#login").click().wait(1000).then(function(){
        // cy.get("#loginSpinner").should("have.class", "spin");
        cy.url().should("eq", data.baseUrl + "/core/inbox");
      });

    });
  });
});
