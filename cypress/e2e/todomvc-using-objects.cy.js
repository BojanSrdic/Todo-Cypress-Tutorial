/* Testing filters in the todomvc app   */

/// <reference types="cypress" />

describe('Examples - filter buttons ', function(){
    beforeEach(function(){
      cy.visit('https://todomvc-app-for-testing.surge.sh/')
      cy.get('.new-todo').type("Element one{enter}")
      cy.get('.new-todo').type("Element two{enter}")
      cy.get('.new-todo').type("Element three{enter}")
  
      // click specific element in the list - second element
      cy.get('.todo-list li:nth-child(2) .toggle').click()
    })
  
    // Should filter "Active" tasks
    it('Should filter "Active" tasks', function() {
      cy.contains('Active').click()
      cy.get('.todo-list li').should('have.length', 2)
    })
  
    // Should filter "Completed" tasks
    it('Should filter "Completed" tasks', function() {
      cy.contains('Completed').click()
      cy.get('.todo-list li').should('have.length', 1)
    })
  
    // Should filter active tasks
    it('Should filter "All" tasks', function() {
      cy.contains('All').click()
      cy.get('.todo-list li').should('have.length', 3)
    })
  })

export class TodoPage {
    navigate() {
        cy.visit('https://todomvc-app-for-testing.surge.sh/')
    }

    addNewTask(newTask) {
        cy.get('.new-todo').type(newTask + "{enter}")
    }
}