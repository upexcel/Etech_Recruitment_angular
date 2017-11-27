import * as data from '../../cypress.json';
describe('Assign a job profile', function() {
  beforeEach(function() {
    cy.login(data.email, data.password);
    // cy.visit(data.baseUrl + "/core/setting/tagsetting");
  });
  afterEach(function() {
    cy.logout();
  });
  //it should visit setting/imap seting page
  it('Add imap email and change their status', function() {
    cy.addImap();
    cy.get("#switchState").click();
  })

  // visit inbox page and fetch latest emails
  it('visit inbox page and fetch latest email', function() {
    cy.server()
    cy.route('GET', data.api_baseUrl + `/email/fetchByButton**`).as('fetch_emails');
    cy.get("#fetchEmails").click();
    cy.wait('@fetch_emails')
  })

  //check send email sucessfully fetched or not
  it('check email fetched sucessully or not', function() {
    cy.get('.emailstyle h5').contains(data.fakeSubject);
    // cy.get('.subenav').contains(data.php_job);
    // cy.get('#PHP').next().find('a:first').should('not.have.text', 'all(0/0)').then(function() {
    //     cy.get('.emailstyle p').contains(data.myEmail)
    // });
  })

  //Add an job profile
  it('Add a new job profile', function() {
    cy.visit(data.baseUrl + "/core/setting/jobProfileTags");
    cy.addJobprofile(data.jobprofile);
  })

  // go to all mails sections and assign a job profile
  it('visit all mails sections', function() {
    // cy.wait(4000);
    cy.get('#Mails').click();
    cy.get(".emailstyle").contains(data.fakeSubject).parent()
      .parent().find('.mat-raised-button').contains(data.jobprofile).click();
  })

  // check job profile is assigned or not
  it('check job profile assigned to candidate or not', function() {
    cy.get('#TEST').next().find('a:first').click().then(function() {
      cy.get('.emailstyle h5').contains(data.fakeSubject);
    })
  })

  // delete created job profile
  it(' delete created job profile', function() {
    cy.visit(data.baseUrl + "/core/setting/jobProfileTags");
    cy.deleteJobprofile();
  })

  // delete imap credentials
  it('delete imap email credentials', function() {
    cy.visit(data.baseUrl + "/core/setting/imap");
    cy.get("#switchState").click();
    cy.get("#tbody tr:first>td button").click()
  })

})
