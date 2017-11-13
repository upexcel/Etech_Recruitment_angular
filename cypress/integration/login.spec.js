describe('Login Page Test', function () {
    it('Visits the Login Page', function () {
        cy.visit('http://dev.recruit.excellencetechnologies.in/#/login');
        cy.get('.logo .img-responsive').should('have.attr', 'src', 'assets/logo.png')
        cy.get('form').within(function () {
            cy.get('input[type="email"]').should('have.attr', 'placeholder', 'Email');
            cy.get('input[type="password"]').should('have.attr', 'placeholder', 'Password')
            cy.get('button.mat-raised-button').should('have.attr', 'ng-reflect-disabled', 'true')
            cy.get('.mat-checkbox').click()
            cy.get('.mat-checkbox').should('have.class', 'mat-checkbox-checked')
        })
    })
    it('Test Login Form With Wrong Data', function () {
        cy.visit('http://dev.recruit.excellencetechnologies.in/#/login');
        cy.get('form').within(function () {
            cy.get('input[type="email"]')
                .type('fakeEmail').should('have.value', 'fakeEmail');
            cy.get('md-input-container').should('have.class', 'mat-input-invalid')
            cy.get('input[type="password"]')
                .type('password').should('have.value', 'password')
            cy.get('button.mat-raised-button').should('have.attr', 'ng-reflect-disabled', 'true')
        })
    })
    // it('Test Login Api With Wrong Data', function () {
    //     cy.visit('http://dev.recruit.excellencetechnologies.in/#/login');
    //     cy.get('form').within(function () {
    //         cy.get('input[type="email"]')
    //             .type('example@gmail.com').should('have.value', 'example@gmail.com');
    //         cy.get('input[type="password"]')
    //             .type('password').should('have.value', 'password')
    //         cy.get('button.mat-raised-button').click();
    //         cy.get('md-spinner').should('have.class', 'spin');
    //         cy.get('md-card-subtitle').should('have.class', 'error');
    //     })
    // })
    it('Test Login Api With Right Data', function () {
        cy.visit('http://dev.recruit.excellencetechnologies.in/#/login');
        cy.get('form').within(function () {
            cy.get('input[type="email"]')
                .type('123@gmail.com').should('have.value', '123@gmail.com');
            cy.get('input[type="password"]')
                .type('123').should('have.value', '123')
            cy.get('button.mat-raised-button').should('have.attr', 'ng-reflect-disabled', 'false')
            cy.get('button.mat-raised-button').click();
            cy.get('md-spinner').should('have.class', 'spin');
            cy.url().should('eq', 'http://dev.recruit.excellencetechnologies.in/#/core/inbox')
        })
    })
})