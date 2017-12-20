import * as data from "../../cypress.json";
describe('Schedule Interview Page Test', function() {
  beforeEach(function() {
    cy.login(data.email, data.password);
  });
  afterEach(function() {
    cy.logout();
  });

  //it should visit inbox page, hit schedule inerview, schedule page have option to select schedual email by direct or by interview
  // if slected direct only schedule inteview options are shown
  // if schedule interview select a form must shown
  // if user hit any inerview tag close popup and email should move to that interview tag
  it('Visits the Inbox page, hit schedule interview tag, check page options', function() {
    // cy.get('#jobprofileNav #All').click().then(() => {
    //   cy.get('#Schedule').click()
    //     cy.get('#scheduleByDirect').should("have.class", "mat-radio-checked");
    //     cy.get('#scheduleByEmail label').click()
    //     cy.get('#scheduleByEmail').should("have.class", "mat-radio-checked")
    //   })
  })

})
