/// <reference types="cypress" />

it('Navigate to ToDoMVC App', function() {
  cy.visit('https://todomvc-app-for-testing.surge.sh/')
  
  // Add new task into to do list
  cy.get('.new-todo').type("Element one{enter}")
  
  // Check if the task is added correctly
  cy.get('label').should('have.text', 'Element one')

  // Check if the task is not checked
  cy.get('.toggle').should('not.be.checked')

  // Make the task checked
  cy.get('.toggle').click()

  // Check the 
  cy.get('.toggle').should('be.checked')
  
  // Clear all compleated tasks
  cy.contains('Clear completed').click()

  // Check if list is empty by checking if 'li' descendants exists
  cy.get('.todo-list').should('not.have.descendants', 'li')
})


// cypress and our test has access to the dom

/* ******************************************************************************* */
/* Tutorial: https://testautomationu.applitools.com/cypress-tutorial/chapter3.html */

/*        () => {} is the same as function() {}

it('Navigate to ToDoMVC App', () => {
  cy.visit('https://todomvc-app-for-testing.surge.sh/')
})

it('Navigate to ToDoMVC App', function() {
  cy.visit('https://todomvc-app-for-testing.surge.sh/')
})

*/

// Treba voditi racuna da imamo 4 seconds timeout!
// cy.visit('https://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000')  ovim simuliramo da se aplikacija ucitava 5 sekundi automatski dovodi do pada testa!
// Tings take tiem to appear so we need somehow to remove this timeout of 4 seconds. 
// Znaci ako posecivanje odrecjenjestranice traje duze od 4s dobicemo fail ali to mozemo da pomenimo sledecnom povecavanjem timeouta
// cy.get('.new-todo', {timeout: 6000}).type("Element one{enter}")
// sada je timeout povecan na 6 sekundi 


// Two ways to access element
// cy.get('.toggle').click()
// cy.contains('Clear completed').click()

// Cypress interacting with elements --> https://docs.cypress.io/guides/core-concepts/interacting-with-elements