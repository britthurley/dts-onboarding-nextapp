/// <reference types="cypress" />

describe('home page loads', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.injectAxe();
    })
  
    it('displays the index page', () => {
        cy.url().should("contains", "/");
    })

    it('displays the language link to change to French', () => {
      cy.url().should("contains", "/");
      cy.get('[data-cy=toggle-language-link]').should('contain.text', 'Français');

  })

  it('displays the language link to change to English', () => {
    cy.get('[data-cy=toggle-language-link]').click()
    cy.url().should("contains", "/fr");
    cy.get('[data-cy=toggle-language-link]').should('contain.text', 'English');

})
  

    it('Has no detectable a11y violations on load', () => {
        cy.checkA11y()
    })
  })
  