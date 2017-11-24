import * as data from '../../cypress.json';

describe('Setting/User List Page Test', function () {


    beforeEach(function () {
        cy.login(data.email, data.password);
        cy.server();
        cy.route("GET", data.apiUrl + "/**").as("get");
        cy.route("PUT", data.apiUrl + "/**").as("put");
    })
    afterEach(function () {
        cy.logout();
    })
    it('add job Profile', function () {
        cy.addJobprofile();
        cy.get("#jobProfile").contains(data.jobprofile);
        cy.get("#toolbar button#sideNav").click();
        cy.get("md-sidenav div#inbox").click();
        cy.get("#side #jobprofileNav").contains(data.jobprofile);
    })
    it('add imap', function () {
        cy.addImap();
        cy.get('#tbody tr:first ').then(() => {
            cy.get('#tbody tr:first>td #switchState').click()
            cy.wait('@put')
            cy.get('#tbody tr:first>td #switchState').should('have.class', 'on');
            cy.get('#tbody tr:first>td button').should('have.attr', 'ng-reflect-disabled', 'true');
        });
    })
    it('add smtp', function () {
        cy.addSmtp();
        cy.get('#tbody tr:first>td:first').should('have.text', data.newSmtpEmail);       

    })
    it('add email template',function(){
        cy.addEmailTemplate();
    })
    it('fetch email',function(){
        cy.get('#fetchLatestEmails').click()
        cy.wait('@get')
        cy.get('#jobprofileNav:first').contains(data.jobprofile)
        cy.get('#jobprofileNav:first #subenav:last span:first').click()
        cy.wait('@put')
        cy.get('#emailTableBox app-emailbox:first').should('be.exist')
        cy.get('#emailTableBox app-emailbox:first ').should('be.exist')
    })
})