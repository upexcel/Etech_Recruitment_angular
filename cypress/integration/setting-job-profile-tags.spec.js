import * as data from "../../cypress.json";
describe("Setting/Job Profile Tag Page Test", function() {
  beforeEach(function() {
    // cy.visit(data.baseUrl + "/login");
    cy.login(data.email, data.password);
    // cy.visit(data.baseUrl + "/core/setting/jobProfileTags");
    // cy.server();
    // cy.route("GET", "**").as("getProtag");
           cy.get("#toolbar #sideNav").click();
           cy.get("md-sidenav #setting").click();
           cy.get("#settingMenu #profileJob").click();
;
  });
  afterEach(function() {
    cy.logout();
  });

  //it should visit setting/JobProfileTag seting page, page have option to add JobProfileTag tag
  it('Visits the Setting/JobProfileTag Setting Page, check page options', function () {
    cy.get("#addTag button").should("have.class", 'mat-accent');
   })

  //if user click on add tag button from page it should open a Add tag pop up with a form. if user click on close button
  //this popus must be closed and automatic tag list remain same
  it('test add tag button and close button functionality', function () {
      cy.get("#addTag button").click();
      cy.get("md-dialog-container").should("be.visible");
      cy.get("#add_tag #close").click();
      cy.get("md-dialog-container").should("not.be.visible");
   })

  //check if form is invalid save button must be disable
  it('check add button validation', function () {
    cy.get("#addTag button").click();
    cy.get("md-dialog-container").should("be.visible");
    cy.get("form").should("have.class", "ng-invalid");
    cy.get("#save").should("have.attr", "disabled");
    cy.get("#close").click();
     cy.get("md-dialog-container").should("not.be.visible");
   })

  //check if user enable 'send automatic email' or 'assign to all exiting emails' it should be enable
  it('test "send automatic email" or "assign to all exiting emails" option functionality', function () {
      cy.get("#addTag button").click();
      cy.get("#send_email").click();
      cy.get("#send_email").should("have.class", "mat-checked");
      cy.get("#assign").click();
      cy.get("#assign").should("have.class", "mat-checked");
      cy.get("#close").click();
      cy.get("md-dialog-container").should("not.be.visible");
   })

  //there should be a option to select tag color with pre-define color list, if user click on any color from list, the selected color will be same
  it('test select tag color functionality', function () {
    cy.get("#addTag button").click();
    cy.get("md-dialog-container").should("be.visible");
    cy.get(".selected-color:last").click().then(($selectedColor) => {
      cy.get("#selected_color").should("have.attr", "style", "background-color: " + (Cypress._.chain($selectedColor).take("property", "style").value())[0].style.backgroundColor + ";");
    })
    cy.get("#close").click();
     cy.get("md-dialog-container").should("not.be.visible");
  })

  //if user fill title and subject and click on save button it should added a tag and popup will close and list of job profile tag will be update
  it("check add button with valid form data", function() {
    cy.get("#addTag button").click();
    cy.get("#add_tag").within(function(){
      cy.get("#title").type(data.jobprofile);
      cy.get("#tagSubject input").type(data.jobprofile);
      cy.get("#tagDescription textarea").type(data.jobprofile);
      cy.get("#tagBtn #save").click().wait(3000)
    })
    // cy.wait("@getProtag")
    cy.get("md-dialog-container").should("not.be.visible");
    cy.get("#jobProfile").contains(data.jobprofile);
  });

  //after adding job profile tag , go to inbox page and check last added tag must be there with all default tags
  it('test inbox page tags with last added tag', function () {

    cy.get("#jobProfile").contains(data.jobprofile);
    cy.get("#toolbar button#sideNav").click();
    cy.get("md-sidenav div#inbox").click();
    // cy.wait("@getProtag");
    cy.get("#side #jobprofileNav").contains(data.jobprofile);
   });

  //in every job profile tag have a option to delete button, if user click on delete button job profile tag list,
  //it should open a confirm popup and user, it have 2 option 'yes' and 'no' buttons, if user click on 'no' popup will close
  // and job profile tag list should be remain same, or if user hit yes job profile should be deleted and job profile list should be updated
  it('test automatic tag delete functionality', function () {
    cy.get("#jobProfile #deleteTag").should("have.class", "iconset");
    cy.get("#jobProfile #ul>#li:last #deleteTag").click();
    cy.get("md-dialog-container").should("be.visible");
    cy.get("#confirm #confirmYes").should("have.class","mat-raised-button");
    cy.get("#confirm #confirmNo").should("have.class", "mat-raised-button");
    cy.get("#confirm #confirmYes").click();
    cy.get("md-dialog-container").should("not.be.visible")
    cy.get("#jobProfile #ul>#li:last").should("not.have.value",data.jobprofile)

  })

  //after deleting automatic tag , go to inbox page and check last added tag must be deleted there
  it('test inbox page tags with last deleted tag', function () {
    cy.get("#addTag button").click();
      cy.get("#add_tag").within(function(){
        cy.get("#title").type(data.jobprofile);
        cy.get("#tagSubject input").type(data.jobprofile);
        cy.get("#tagDescription textarea").type(data.jobprofile);
        cy.get("#tagBtn #save").click()
      })
    cy.get("md-dialog-container").should("not.be.visible");
    // cy.wait("@getProtag");
    cy.get("#jobProfile").contains(data.jobprofile)
    cy.get("#jobProfile #ul>#li:last #deleteTag").should("have.class", "iconset");
    cy.get("#jobProfile #ul>#li:last #deleteTag").click();
    cy.get("md-dialog-container").should("be.visible");
    cy.get("#confirm #confirmYes").should("have.class","mat-raised-button");
    cy.get("#confirm #confirmNo").should("have.class", "mat-raised-button");
    cy.get("#confirm #confirmYes").click();
    // cy.wait("@getProtag");
    cy.get("md-dialog-container").should("not.be.visible");
    cy.get("#jobProfile #ul>#li:last").should("not.have.value",data.jobprofile)
    cy.get("#toolbar button#sideNav").click();
    cy.get("md-sidenav div#inbox").click()
    cy.get("#inboxTag .default-tag-buttons").should("not.have.value",data.jobprofile);

  })
});
