/// <reference types="cypress" />

describe('template spec', () => {
  it.skip('passes', () => {
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
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

  it('passes new', () => {
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')

    cy.contains('Sign In').click()

    cy.get("input[name='username']").clear().type("698")
    cy.get("input[name='password']").clear().type("CypressPassword")

    cy.contains('Login').click()

    cy.contains('Welcome')
  })

  it('Side bar navigation', () => {
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')

    //cy.get("area[alt='Fish']").click()
    cy.get("img[src='../images/fish_icon.gif']").click()
    cy.get("img[src='../images/logo-topbar.gif']").click()
    cy.get("img[src='../images/sm_fish.gif']").click()
    cy.get("h2").contains("Fish")
  })

  it('Top bar navigation page', () => {
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')

    //cy.get("area[alt='Fish']").click()
    cy.get("img[src='../images/fish_icon.gif']").click()
    cy.get("img[src='../images/logo-topbar.gif']").click()
    cy.get("img[src='../images/sm_fish.gif']").click()
    cy.get("h2").contains("Fish")
  })

  

  it('fish pages', () => {
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')

    //cy.get("area[alt='Fish']").click()
    cy.get("img[src='../images/fish_icon.gif']").click()
    cy.get("img[src='../images/logo-topbar.gif']").click()
    cy.get("img[src='../images/sm_fish.gif']").click()
    cy.get("h2").contains("Fish")
  })

  it('Search functionality', () => {
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.get("input[name='keyword']").clear().type("Angelfish")
    cy.get("input[name='searchProducts']").click()
    //cy.get("font[color='BLACK']").contains(" FI-SW-04 ")
  })

  it('order fish', () => {
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.get("img[src='../images/fish_icon.gif']").click()
    cy.contains('FI-FW-01').click()
    cy.contains('Add to Cart').click()
    //cy.get("font[color='BLACK']").contains(" FI-SW-04 ")
  })

})

