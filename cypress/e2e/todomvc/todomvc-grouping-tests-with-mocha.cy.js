/* This code will represent how to create more then one test and how to organize them in groups. Will use code from SimpleToDo   */
/// <reference types="cypress" />

describe('To do actions', function(){
  beforeEach(function(){
    cy.visit('https://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type("Element one{enter}")
  })
  
  // Should add new task in the list
  it('Should add new task in the list', function() {
    cy.get('label').should('have.text', 'Element one')
    cy.get('.toggle').should('not.be.checked')
  })

  // Should toggle (mark) existing task as compleated
  it('Should mark existing task as compleated', function() {
    cy.get('.toggle').click()
    cy.get('.toggle').should('be.checked')
  })

  // Should clearing completed task
  it('Should clearing completed task', function() {
    cy.get('.toggle').click()
    cy.contains('Clear completed').click()
    cy.get('.todo-list').should('not.have.descendants', 'li')
  })
})

// Run cypress without browser - that means that browser is running in a headless mode
// npx cypress run 

/*

do sada smo otvarali testove komandom npx cypress open ako hocemo da to uradimo sa npm run cypress treba uraditi sledece u packaage.json treba dodati

"scripts":{
  "cypress": "cypress open"
  "test": "cypress run"
}

// now we can use npm run cypress to open the tests in browser
// and npm run test to run in headless mode

*/