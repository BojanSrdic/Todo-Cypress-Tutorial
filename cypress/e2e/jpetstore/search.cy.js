/// <reference types="cypress" />

describe('should check search functionality', () => {

    it('should search for the specific fish "Angelfish"', () => {
      cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
      cy.get("input[name='keyword']").clear().type("Angelfish")
      cy.get("input[name='searchProducts']").click()
      //cy.get("font[color='BLACK']").contains(" FI-SW-04 ")
    })

  })
  
  