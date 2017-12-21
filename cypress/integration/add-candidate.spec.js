import * as data from "../../cypress.json";
describe('Schedule Interview Page Test', function () {
    beforeEach(function () {
        cy.login(data.email, data.password);
    });
    afterEach(function () {
        cy.logout();
    });

    //It should test add candidate link functionality. At any tag click on add candidate it should open a add candidate popup
    it('It should test add candidate link functionality', function () {
    })

    //after open add candidate form add button must be disabled first time
    //add subject, enter wrong email, enter wrong mobile number, add a body
    it('It should test add candidate page validation with wrong data', function () {  
    })

    //add subject, enter right email, enter right mobile number, add a body, add button must be enable
    // if click on add button popup must be cloased
    it('It should test add candidate page validation with right data', function () {
        
    })
})
