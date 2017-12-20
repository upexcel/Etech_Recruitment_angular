import * as data from "../../cypress.json";
describe("Inbox/Inbox Side Nav Page Default tag Test", function() {

  beforeEach(function() {
    cy.login(data.email, data.password);
  });
  afterEach(function() {
    cy.logout();
  });
  // add a job profile
  it("add job profile", function() {
    // cy.visit(data.baseUrl + "/core/setting/jobProfileTags");
    cy.addJobprofile(data.jobprofile)
  })

  //Visits the Inbox Page add Default sub tag
  it("Visits the Inbox Page add Default sub tag", function() {
     cy.server()
     
    cy.route({
      method: 'POST',
      url: data.apiUrl + `/tag/add/**`
    }).as('default_tag')

    cy.route({
      method: 'GET',
      url: data.apiUrl + `/email/countEmail**`
    }).as('count_mail')
    cy.get("#subtitle").contains("TEST").next().click();
    cy.get('#title input')
      .type(data.defaultTagTitle).should('have.value', data.defaultTagTitle);
    cy.get('#subject input')
      .type(data.defaultTagTitle).should('have.value', data.defaultTagTitle);
    cy.get('#save').should('have.attr', 'ng-reflect-disabled', 'false');
    cy.get('#save').click()
    // 
    cy.get("md-dialog-container").should("not.be.visible");
    cy.wait('@default_tag').wait('@count_mail')
    cy.get("#subChild").contains('Default Tags');
  });

  //checks on click toggle shows default tags
  it("checks on click toggle shows default tags", function() {
    cy.get("#subChild #arrowdown").click()
    cy.get("#addedtag").contains("noida");
  });

  // delete a job profile
  it("delete job profile", function() {
    cy.visit(data.baseUrl + "/core/setting/jobProfileTags");
    cy.deleteJobprofile(data.jobprofile)
  })
});
