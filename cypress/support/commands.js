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
  cy.visit(data.baseUrl + "/login");
  cy.get("#loginForm #loginEmail").type(email);
  cy.get("#loginForm #loginPassword").type(password);
  cy.get("#loginForm #login").click();
  cy.url().should("eq", data.baseUrl + "/core/inbox");
});
//logout
Cypress.Commands.add("logout", function() {
  cy.get("#toolbar button#sideNav").click();
  cy.get("md-sidenav div#logout").click();
  // cy.url().should('eq',data.baseUrl+'/');
});

//addimap
Cypress.Commands.add("addImap", function() {
  cy.visit(data.baseUrl + "/core/setting/imap");
  cy.get("#FormEmail input").type(data.newImapEmail);
  cy.get("#FormPassword input").type(data.newImapPassword);
  cy.get("#FormDate #date").type(data.date);
  cy.get("#FormButton button").click();
});
//delete imap
Cypress.Commands.add("deleteImap", function() {
  cy.visit(data.baseUrl + "/core/setting/imap");
  cy
    .get("#tbody tr:first>td button")
    .click()
});

//add smtp
Cypress.Commands.add("addSmtp", function() {
  cy.visit(data.baseUrl + "/core/setting/smtp");
  cy.get("#smtpFormUserEmail input").type(data.newSmtpEmail);
  cy.get("#smtpFormSendEmail input").type(data.newSmtpEmail);
  cy.get("#smtpFormPassword input").type(data.smtpPassword);
  cy.get("#smtpFormServerName input").type(data.serverName);
  cy.get("#smtpFormPort input").type(data.portNo);
  cy.get("#smtpFormRadio #option1").click();
  cy
    .get("#smtpFormSave button")
    .click()
});
//delete smtp
Cypress.Commands.add("deleteSmtp", function() {
  cy.visit(data.baseUrl + "/core/setting/smtp");
  cy.get("#tbody tr:last #status").click();
  cy
    .get("#tbody tr:first #remove")
    .click()
});

//add job profile
Cypress.Commands.add("addJobprofile", function() {
  cy.visit(data.baseUrl + "/core/setting/jobProfileTags");
  cy.get("#addTag button").click();
  cy.get("#add_tag #title").type(data.jobprofile);
  cy.get("#add_tag #tagSubject input").type(data.jobprofile);
  cy.get("#add_tag #tagDescription textarea").type(data.jobprofile);
  cy
    .get("#add_tag #tagBtn #save")
    .click()
});
//delete job profile
Cypress.Commands.add("deleteJobprofile", function(jobprofile) {
  cy.get("#jobProfileTags").click();
  cy.get(`#${jobprofile}`).click();
  cy.get("#confirmYes").click();
  cy.get("md-dialog-container").should("not.be.visible");
});

//add automatic tag
Cypress.Commands.add("addAutomtictag", function() {
  cy.visit(data.baseUrl + "/core/setting/automaticTags");
  cy.get("#autoTag button").click();
  cy.get("#add_tag #title").type(data.automaticTag);
  cy.get("#add_tag #tagSubject input").type(data.automaticTag);
  cy
    .get("#add_tag #tagBtn #save")
    .click()
});
//delete automatic tag
Cypress.Commands.add("deleteAutomtictag", function() {
  cy.visit(data.baseUrl + "/core/setting/automaticTags");
  cy
    .get("#autotagPage #ul>#li:last #deleteAutotag")
    .click()
});

//send email
Cypress.Commands.add("sendMail", function() {
  cy.server();
  cy.route('GET',data.apiUrl+`/imap/get**`).as('getImap');
  cy.get("#sideNav").click();
  cy.get("md-sidenav #setting").click();
  cy.get("#smtpInfo").click()
  cy.get(".content").should("be.visible").wait('@getImap');
  cy.get("#table tbody tr:last").contains("testhr69@gmail.com")
    .nextAll().eq(4).click();
});

//fetch latest email
Cypress.Commands.add("fetchLatestMails", function() {
  cy.server()
  cy.route('GET',data.apiUrl+`/email/fetchByButton**`).as('fetch_emails')
  cy.get("#fetchEmails").click();
  cy.wait('@fetch_emails')
});
