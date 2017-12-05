import * as data from '../../cypress.json';
import moment from 'moment';

describe('Schedule Email Page Test', function () {


    beforeEach(function () {
        cy.login(data.email, data.password);
        cy.server();
        cy.route("GET", data.apiUrl + "/**").as("get");
        cy.route("PUT", data.apiUrl + "/**").as("put");
        cy.route("POST", data.apiUrl + "/**").as("post");
    })
    // afterEach(function () {
    //     cy.logout();
    // })

    it('add job Profile', function () {
    cy.addJobprofile();
    cy.wait('@post')    
    cy.get("#jobProfile").contains(data.jobprofile);
    cy.get("#toolbar button#sideNav").click();
    cy.get("md-sidenav div#inbox").click();
    cy.get("#side #jobprofileNav").contains(data.jobprofile);
    })

    it('add imap', function () {
    cy.addImap();
    cy.wait('@post')        
    cy.get('#tbody tr:first ').then(() => {
        cy.get('#tbody tr:first>td #switchState').click()
        cy.wait('@put')
        cy.get('#tbody tr:first>td #switchState').should('have.class', 'on');
        cy.get('#tbody tr:first>td button').should('have.attr', 'ng-reflect-disabled', 'true');
    });
    })
    
    it('add smtp', function () {
    cy.addSmtp();
    cy.wait('@post')
    cy.get('#tbody tr:first>td:first').should('have.text', data.newSmtpEmail);       

    })
    it('add email template',function(){
    cy.addEmailTemplate();
    })
    
    it('fetch email', function () {
        cy.get('#fetchLatestEmails').click()
        cy.wait('@get')
        cy.get('#jobprofileNav:first').contains(data.jobprofile)
        cy.get('#TEST').next().find('a:first').click()
        cy.wait('@put')
        cy.get('#emailTableBox app-emailbox:first').should('be.exist')
        cy.get(".emailstyle:first h5").contains("TEST")
       // cy.get(".emailstyle:first p").contains("testexcel69@gmail.com")
        cy.get(".emailstyle:first #Schedule").click()
        cy.wait('@put')
        //cy.wait('@get')
        cy.get("#scheduleForm").should('be.exist')
        cy.get('#scheduleForm #interviewRound').click()
        cy.get('md-option:first').click()
        // let tomorrow = new Date();
        // tomorrow.setDate(tomorrow.getDate() + 1);
        // let date=moment(tomorrow).format("DD-MMMM-YYYY")
        cy.get('#scheduleForm #selectDate').click()
        cy.get(".mat-calendar-table tbody>tr:last>td:last").click()
       // cy.get('#scheduleForm #selectDate').click()
        // cy.get('#datePicker').click()
        // cy.get('#datePicker').within(function(){
        //     cy.get('#selectDate').then((data)=>{
        //         console.log(data)
        //     })
        // })
        cy.get('#scheduleForm #selectTime').click()
        cy.get('md-option:first').click()
        cy.get('#scheduleForm #selectTemplate').click()
        cy.get('md-option:first').click()
        cy.get('#scheduleForm #mobileNo').type("1234567890")
        cy.get('#scheduleButton').click()
        cy.get("#scheduleForm").should('not.be.visible')
        cy.get('#fetchLatestEmails').click()
        cy.get('#jobprofileNav:first').contains(data.jobprofile)
        cy.get('#TEST').next().find('span:nth-child(4) a:first').click()
        cy.wait('@put')
        cy.get('#emailTableBox app-emailbox:first').should('be.exist')
        cy.get(".emailstyle:first h5").contains("TEST")
        //cy.get(".emailstyle:first p").contains("testexcel69@gmail.com")
    })
})