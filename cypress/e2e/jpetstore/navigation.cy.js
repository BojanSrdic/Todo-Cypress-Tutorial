/// <reference types="cypress" />

describe('should check navigation functionality', () => {  
    beforeEach(function() {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    })

    it('should desplay fish page when "Fish" button in side-bar nav is clicked', () => {
      cy.get("img[src='../images/fish_icon.gif']").click()
      cy.get("h2").contains("Fish")
    })

    it('should desplay fish page when "Fish" button in top-bar nav is clicked', () => {
      cy.get("img[src='../images/sm_fish.gif']").click()
      cy.get("h2").contains("Fish")
    })

    it('should desplay dogs page when "Dogs" button in side-bar nav is clicked', () => {
      cy.get("img[src='../images/dogs_icon.gif']").click()
      cy.get("h2").contains("Dogs")
    })

    it('should desplay dogs page when "Dogs" button in top-bar nav is clicked', () => {
      cy.get("img[src='../images/sm_dogs.gif']").click()
      cy.get("h2").contains("Dogs")
    })

    it('should desplay home page when "JPetStore" logo image is clicked', () => {
      cy.get("img[src='../images/sm_dogs.gif']").click()
      cy.get("img[src='../images/logo-topbar.gif']").click()
      cy.contains('Sign In')
    })
    
  })
  
  