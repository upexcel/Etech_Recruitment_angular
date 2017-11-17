import details from "./cypress.json";
Cypress.Commands.add( "login", () => {
	cy.visit( details.baseUrl + "login" );
	cy.get( "form" ).within( function() {
		cy.get( "input[type=\"email\"]" ).type( details.email );
		cy.get( "input[type=\"password\"]" ).type( details.password );
		cy.get( "button.mat-raised-button" ).should( "have.attr", "ng-reflect-disabled", "false" );
		cy.get( "button.mat-raised-button" ).click();
		cy.url().should( "eq", details.baseUrl + "core/inbox" );
		cy.visit( details.baseUrl + "core/setting/tagsetting" );
	} );
} );

Cypress.Commands.add( "logout", () => {
	cy.get( "#menu" ).click();
	cy.get( "#logout" ).click();
} );
