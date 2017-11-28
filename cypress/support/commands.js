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

import * as data from "../../cypress.json";
//login
Cypress.Commands.add("login", function(email, password) {
  cy.visit(data.baseUrl + '/login').then(() => {
    cy.get("#loginForm #loginEmail").type(email).then(() => {
      cy.get("#loginForm #loginPassword").type(password).then(() => {
        cy.get("#loginForm #login").click();
        cy.url().should("eq", data.baseUrl + "/core/inbox");
      });
    });
  });
  // cy.get('#loginButton').click()
});
//logout
Cypress.Commands.add("logout", function() {
  cy.get("#toolbar #sideNav").click();
  cy.get("md-sidenav #logout").click();
});

//addimap
Cypress.Commands.add("addImap", function(newImapEmail, newImapPassword, date) {
  cy.server();
  cy.route('POST',data.apiUrl+`/imap/save**`).as('postImap');
  cy.route('GET',data.apiUrl+`/imap/get**`).as('getImap');
  cy.get("#sideNav").click();
  cy.get("md-sidenav #setting").click();
  cy.get("#FormEmail input").type(newImapEmail);
  cy.get("#FormPassword input").type(newImapPassword);
  cy.get("#FormDate #date").type(date);
  cy.get("#FormButton button").click().wait('@postImap').then(function() {
  cy.wait('@getImap');
  // cy.get("#switchState").should("be.visible")
  });
});
//delete imap
Cypress.Commands.add("deleteImap", function() {
  cy.get("#sideNav").click();
  cy.get("md-sidenav #setting").click();
  cy.get("#tbody tr:first>td button").click()
});

//add smtp
Cypress.Commands.add("addSmtp", function(newSmtpEmail, smtpPassword, serverName, portNo) {
  cy.get("#sideNav").click();
  cy.get("md-sidenav #setting").click();
  cy.get("#smtpInfo").click();
  cy.get("#smtpFormUserEmail input").type(newSmtpEmail);
  cy.get("#smtpFormSendEmail input").type(newSmtpEmail);
  cy.get("#smtpFormPassword input").type(smtpPassword);
  cy.get("#smtpFormServerName input").type(serverName);
  cy.get("#smtpFormPort input").type(portNo);
  cy.get("#smtpFormRadio #option1").click();
  cy.get("#smtpFormSave button").click();
});
//delete smtp
Cypress.Commands.add("deleteSmtp", function() {
  cy.get("#sideNav").click();
  cy.get("md-sidenav #setting").click();
  cy.get("#smtpInfo").click();
  cy.get("#tbody tr:last #status").click();
  cy.get("#tbody tr:first #remove").click()
});

//add job profile
Cypress.Commands.add("addJobprofile", function(jobprofile) {
  cy.get("#sideNav").click();
  cy.get("md-sidenav #setting").click();
  cy.get("#jobProfileTags").click();
  cy.get("#addTag button").click();
  cy.get("#add_tag #title").type(jobprofile);
  cy.get("#add_tag #tagSubject input").type(jobprofile);
  cy.get("#add_tag #tagDescription textarea").type(jobprofile);
  cy.get("#add_tag #tagBtn #save").click()
  cy.get("md-dialog-container").should("not.be.visible")
});

//delete job profile
Cypress.Commands.add("deleteJobprofile", function(jobprofile) {
  cy.get("#sideNav").click();
  cy.get("md-sidenav #setting").click();
  cy.get("#jobProfileTags").click();
  cy.get(`#${jobprofile}`).click();
  cy.get("#confirmYes").click();
  cy.get("md-dialog-container").should("not.be.visible");
});

//add automatic tag
Cypress.Commands.add("addAutomtictag", function(autoTag) {
  cy.get("#sideNav").click();
  cy.get("md-sidenav #setting").click();
  cy.get("#automatic").click();
  cy.get("#autoTag button").click();
  cy.get("#add_tag #title").type(autoTag);
  cy.get("#add_tag #tagSubject input").type(autoTag);
  cy.get("#add_tag #tagBtn #save").click();
});
//delete automatic tag

Cypress.Commands.add("deleteAutomtictag", function() {
  cy.get("#sideNav").click();
  cy.get("md-sidenav #setting").click();
  cy.get("#automatic").click();
  cy.get("#autotagPage #ul>#li:last #deleteAutotag").click()
});