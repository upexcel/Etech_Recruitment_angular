import * as data from '../../cypress.json';
describe('Assign a job profile', function() {
  beforeEach(function() {
    cy.login(data.email, data.password);
  });
  afterEach(function() {
    cy.logout();
  });

  // send mail and visit inbox page and fetch latest emails
  it('visit inbox page and fetch latest email', function() {
    cy.sendMail()
    cy.visit(data.baseUrl + "/core/inbox")
    cy.fetchLatestMails();
  })

  //check send email sucessfully fetched or not
  it('check email fetched sucessully or not', function() {
    cy.get('.emailstyle h5').contains("test");
  })

  //Add an job profile
  it('Add a new job profile', function() {
    cy.visit(data.baseUrl + "/core/setting/jobProfileTags");
    cy.addJobprofile(data.php_job);
  })

  // go to all mails sections and assign a job profile
  it('visit all mails sections', function() {
    cy.get('#Mails').click();
    cy.get(".emailstyle").contains(data.subject).parent()
      .parent().find('.mat-raised-button').contains(data.php_job).click();
  })

  // check job profile is assigned or not
  it('check job profile assigned to candidate or not', function() {
    cy.get('#PHP').next().find('a:first').click().then(function() {
      cy.get('.emailstyle:first h5').contains(data.subject);
    })
  })

  // delete created job profile
  it(' delete created job profile', function() {
    cy.visit(data.baseUrl + "/core/setting/jobProfileTags");
    cy.deleteJobprofile(data.php_job);
  })

})