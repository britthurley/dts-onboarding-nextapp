/// <reference types="cypress" />



describe('home page loads', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('displays the index page', () => {
        cy.url().should("contains", "/");
    })
  })
  