/// <reference types="cypress" />

describe('should add animal to the basket', () => {  
    beforeEach(function() {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    })

    afterEach(function() {
        cy.get("h2").contains("Shopping Cart")
     })
    
    it('should add fish into the basket', function() {
      cy.get("img[src='../images/fish_icon.gif']").click()
      cy.contains('FI-FW-01').click()
      cy.contains('Add to Cart').click()
    })

    it('should add dog into the basket', function() {
        cy.get("img[src='../images/dogs_icon.gif']").click()
        cy.contains('K9-DL-01').click()
        cy.contains('Add to Cart').click()
      })

      it('should add cat into the basket', function() {
        cy.get("img[src='../images/cats_icon.gif']").click()
        cy.contains('FL-DSH-01').click()
        cy.contains('Add to Cart').click()
      })

      it('should add reptile into the basket', function() {
        cy.get("img[src='../images/reptiles_icon.gif']").click()
        cy.contains('RP-LI-02').click()
        cy.contains('Add to Cart').click()
      })

      it('should add bird into the basket', function() {
        cy.get("img[src='../images/birds_icon.gif']").click()
        cy.contains('AV-CB-01').click()
        cy.contains('Add to Cart').click()
      })

  })

  describe('should remove animal from the basket', () => {  

    it('should remove fish from the basket', function() {
      cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
      cy.get("img[src='../images/fish_icon.gif']").click()
      cy.contains('FI-FW-01').click()
      cy.contains('Add to Cart').click()
      cy.contains('Remove').click()
      cy.contains('Your cart is empty.')
    })
  })
  
  