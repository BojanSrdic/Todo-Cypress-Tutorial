/// <reference types="cypress" />

describe('should add animal to the basket', () => {  
    beforeEach(function() {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    })

    // how to call just sign up test from another file?
    it.skip('should sign up', () => {
        cy.contains('Sign In').click()
    
        cy.contains('Register Now!').click()
    
        cy.get("input[name='username']").type("698")
        cy.get("input[name='password']").type("CypressPassword")
        cy.get("input[name='repeatedPassword']").type("CypressPassword")
    
        cy.get("input[name='account.firstName']").type("Test")
        cy.get("input[name='account.lastName']").type("Test")
        cy.get("input[name='account.email']").type("Test@test.com")
        cy.get("input[name='account.phone']").type("0651234567")
        cy.get("input[name='account.address1']").type("Address one")
        cy.get("input[name='account.address2']").type("Address two")
        cy.get("input[name='account.city']").type("Denver")
        cy.get("input[name='account.state']").type("Colorado")
        cy.get("input[name='account.zip']").type("82140")
        cy.get("input[name='account.country']").type("USA")
    
        cy.get("input[name='account.listOption']").click()
        cy.get("input[name='account.bannerOption']").click()
    
        cy.contains('Save Account Information').click()
    
        cy.contains('Sign In').click()
    
        cy.get("input[name='username']").clear().type("698")
        cy.get("input[name='password']").clear().type("CypressPassword")
      }) 

    it('should add fish into the basket', function() {
      cy.contains('Sign In').click()
      cy.get("input[name='username']").clear().type("698")
      cy.get("input[name='password']").clear().type("CypressPassword")
      cy.contains('Login').click()
      cy.get("img[src='../images/fish_icon.gif']").click()
      cy.contains('FI-FW-01').click()
      cy.contains('Add to Cart').click()
      cy.contains('Proceed to Checkout').click()
      cy.contains('Continue').click()
      cy.contains('Confirm').click()
      cy.contains("Thank you, your order has been submitted.")
    })
})

  