import * as data from '../../cypress.json';
describe("Setting/Tag Setting Page Test", function() {
  beforeEach(function() {
    cy.login(data.email, data.password);
    cy.visit(data.baseUrl + "/core/setting/tagsetting");
  });

  afterEach(function() {
    cy.logout();
  });
  //it should visit setting/tag seting page
  it("Visits the Setting/Tag Setting Page", function() {
    cy.get(".content").should("be.visible");
  });

  // check page have Default tag list with data and a manual tag heading and a option to add manual tag
  it("test page variable and options", function() {
    cy.get("#default_mainform #default_tag").contains("Default tag(s)");
    cy.get("#default_mainform .tagbutton").should("be.exist");
    cy.get("#manual_mainform #manual_tag").contains("Manual tag(s)");
  });

  //if user click on add tag button from page it should open a Add tag pop up with a form. if user click on close button
  //this popus must be closed and manual tag list remain same
  it("test add tag button and close button functionality", function() {
    cy.get("#AddTag").click();
    cy.get("md-dialog-container").should("be.visible");
    cy.get("#close").click();
    cy.get("md-dialog-container").should("not.be.visible");
  });

  //check if form is invalid save button must be disable
  it("check add button validation", function() {
    cy.get("#AddTag").click();
    cy.get("md-dialog-container").should("be.visible");
    cy.get("form").should("be.visible");
    cy.get("#save").should("have.attr", "disabled");
    cy.get("#close").click();
  });

  //check if user enable 'send automatic email' or 'assign to all exiting emails' it should be enable
  it("test \"send automatic email\" or \"assign to all exiting emails\" option functionality", function() {
    cy.get("#AddTag").click();
    cy.get("#send_email .mat-slide-toggle-thumb").click();
    cy.get("#send_email").should("have.class", "mat-checked");
    cy.get("#assign .mat-slide-toggle-thumb").click();
    cy.get("#assign").should("have.class", "mat-checked");
    cy.get("#close").click();
  });

  // there should be a option to select tag color with pre - define color list,
  // if user click on any color from list, the selected color will be same
  it("test select tag color functionality", function() {
    cy.get("#AddTag").click();
    cy.get(".selected-color:last").click().then(($selectedColor) => {
      cy.get("#selected_color").should("have.attr", "style", "background-color: " + (Cypress._.chain($selectedColor).take("property", "style").value())[0].style.backgroundColor + ";");
      cy.get("#close").click();
    });
  });

  // if user fill title and subject and click on save button it should added a tag and popup will close and lis of manual tag will be update
  it("check add button with valid form data", function() {
    cy.get("#AddTag").click();
    cy.get("#title").type("title_test");
    cy.get("#subject").type("subject_test");
    cy.get("#save").click().then(function() {
      cy.get("md-dialog-container").should("not.be.visible");
      cy.get(".tagbutton1").contains("test");
    });
  });

  //in every manual tag have a option to delete button, if user click on delete button manual tag list, that tag must be delted from list
  it("test manual tag delete functionality", function() {
    cy.get(".tagbutton1:last .tagname").then(($selectedDelete) => {
      cy.get(".tagbutton1:last md-icon").click();
      cy.get(".tagbutton1:last tagname").should("not.have.text", $selectedDelete[0].innerText);
    });
  });
});
