import * as data from "../../cypress.json";
describe('Setting/AutomaticTag Setting Page Test', function() {
  beforeEach(function() {
    cy.login(data.email, data.password).then(() => {
      // cy.get('#sideNav').click()
      // cy.get('md-sidenav #setting').click()
      // cy.get('#automatic').click()
      cy.visit(data.baseUrl + "/core/setting/automaticTags");
    });
    cy.server()
    cy.route({ method: 'POST', url: `http://localhost:8091/**` }).as('postAddTag')
  });
  // afterEach(function() {
  //   cy.wait(1000)
  //   cy.logout();
  // });

  //it should visit setting/AutomaticTag seting page, page have option to add automatic tag
  it('Visits the Setting/AutomaticTag Setting Page, check page options', function() {
    cy.get("#autoTag #addAutotag").should("have.class", "mat-accent")
  })

  //if user click on add tag button from page it should open a Add tag pop up with a form. if user click on close button
  //this popus must be closed and automatic tag list remain same
  it('test add tag button and close button functionality', function() {
    cy.get("#autoTag #addAutotag").click();
    cy.get("md-dialog-container").should("be.visible")
    cy.get("#add_tag #close").click();
    cy.get("md-dialog-container").should("not.be.visible");
  })

  //check if form is invalid save button must be disable
  it('check add button validation', function() {
    cy.get("#autoTag #addAutotag").click();
    cy.get("md-dialog-container").should("be.visible");
    cy.get("form").should("have.class", "ng-invalid");
    cy.get("#save").should("have.attr", "disabled")
    cy.get("#close").click();
  })

  //check if user enable 'send automatic email' or 'assign to all exiting emails' it should be enable
  it('test "send automatic email" or "assign to all exiting emails" option functionality', function() {
    cy.get("#autoTag #addAutotag").click();
    cy.get("#send_email").click();
    cy.get("#send_email").should("have.class", "mat-checked");
    cy.get("#assign").click();
    cy.get("#assign").should("have.class", "mat-checked");
    cy.get("#close").click();
  })

  //there should be a option to select tag color with pre-define color list, if user click on any color from list, the selected color will be same
  it('test select tag color functionality', function() {
    cy.get("#autoTag #addAutotag").click()
    cy.get("md-dialog-container").should("be.visible");
    cy.get(".selected-color:last").click().then(($selectedColor) => {
      cy.get("#selected_color").should("have.attr", "style", "background-color: " + (Cypress._.chain($selectedColor).take("property", "style").value())[0].style.backgroundColor + ";");
      cy.get("#close").click();
    })
  })

  //if user fill title and subject and click on save button it should added a tag and popup will close and lis of automatic tag will be update
  it('check add button with valid form data', function() {
    cy.get("#autoTag #addAutotag").click();
    cy.get("#add_tag").within(function() {
      cy.get("#title").type(data.automaticTag)
      cy.get("#tagSubject input").type(data.automaticTag)
      cy.get("#tagBtn #save").click()
    })
  })

  //after adding automatic tag , go to inbox page and check last added tag must be there
  it('test inbox page tags with last added tag', function() {
    cy.get("#autotagPage").contains(data.automaticTag);
    cy.get("#toolbar #sideNav").click();
    cy.get("md-sidenav #inbox").click()
    cy.url().should("eq", data.baseUrl + "/core/inbox");
    cy.get("#side").should('be.visible');
    cy.get("#side #jobprofileNav").contains(data.automaticTag);
  })

  //in every automatic tag have a option to delete button, if user click on delete button automatic tag list,
  //it should open a confirm popup and user, it have 2 option 'yes' and 'no' buttons, if user click on 'no' popup will close
  // and automatic tag list should be remain same, or if user hit yes automatic tag should be deleted and automatic tag list should be updated
  it('test automatic tag delete functionality', function() {
    cy.get("#autotagPage #deleteAutotag").should("have.class", "iconset");
    cy.get("#autotagPage #ul>#li:last #deleteAutotag").click()
    cy.get("#autotagPage #ul>#li:last").should("not.have.value", "Autotagtest")
  })

  //after deleting automatic tag , go to inbox page and check last added tag must be deleted there
  it('test inbox page tags with last deleted tag', function() {
    cy.get("#autoTag #addAutotag").click();
    cy.get("#add_tag").within(function() {
      cy.get("#title").type("Autotagtest");
      cy.get("#tagSubject input").type("Autotagtest");
      cy.get("#tagBtn #save").click()
    })
    cy.get("#add_tag").should('not.be.visible');
    cy.wait("@postAddTag")
    cy.get("#autotagPage").contains("Autotagtest")
    cy.get("#autotagPage #ul>#li:last #deleteAutotag").should("have.class", "iconset");
    cy.get("#autotagPage #ul>#li:last #deleteAutotag").click();
    cy.get("#autotagPage #ul>#li:last").should("not.have.value", "Autotagtest")
    // cy.get("#toolbar button#sideNav").click();
    // cy.get("md-sidenav div#inbox").click()
    cy.visit(data.baseUrl + "/core/inbox");
    cy.get("#inboxTag .default-tag-buttons").should("not.have.value", "Autotagtest");
  })

})
