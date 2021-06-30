/// <reference types='cypress' />


import user from '../fixtures/database_en_50.json'



describe.skip("Filling form for automation tools' practice", () => {
    it('open toolsqa', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
    
        cy.get('h5').contains('Student Registration Form')
        .should('be.visible')
    })

    it('filling the form', () => {

        cy.fixture('database_en_50.json').as('database_en_50', () => {
            cy.get('#firstName').type(database_en_50.first_name)
            cy.get('#lastName').type(database_en_50.last_name)
            cy.get('#userEmail').type(database_en_50.email)
            cy.get('#userNumber').type(database_en_50.phone)
       
        })   
    
        cy.get('#submit').click()
    
        cy.get('#example-modal-sizes-title-lg')
        .should('be.visible')
    
    })
    
    it('reloading', () => {
    
        cy.get('#close-fixedban > img').click()
        cy.get('#closeLargeModal').click()
        cy.get('h5').contains('Student Registration Form')
        .should('be.visible')
    })
})

// Second attempt

describe("Filling form for automation tools' practice", function () {

    beforeEach(function() {
        cy.fixture('database_en_50.json').then(function(data) {
            this.data = data
        })
    })

    it('open toolsqa', function () {
        cy.visit('https://demoqa.com/automation-practice-form')
    
        cy.get('h5').contains('Student Registration Form')
        .should('be.visible')
    })

    it('filling the form', function () {

    
        cy.get('#firstName').type('this.data.first_name')
        cy.get('#lastName').type(this.data.last_name)
        cy.get('#userEmail').type(this.data.email)
        cy.get('#userNumber').type(this.data.phone)
       
           
    
        cy.get('#submit').click()
    
        cy.get('#example-modal-sizes-title-lg')
        .should('be.visible')
    
    })
    
    it('reloading', function () {
    
        cy.get('#close-fixedban > img').click()
        cy.get('#closeLargeModal').click()
        cy.get('h5').contains('Student Registration Form')
        .should('be.visible')
    })
})