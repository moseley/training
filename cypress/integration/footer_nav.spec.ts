/// <reference types="cypress" />

describe('Footer Navigation', () => {
  it('should navigate to the Home page', () => {
    cy.visit('/privacy')
    cy.get('a[href="/"]').click()
    cy.url().should('include', '/')
    cy.get('h1').contains('Command Tactical Training')
  })

  it('should navigate to the Privacy Policy page', () => {
    cy.visit('/')
    cy.get('a[href*="privacy"]').click()
    cy.url().should('include', '/privacy')
    cy.get('h1').contains('Privacy Policy')
  })

  it('should navigate to the Terms of Service page', () => {
    cy.visit('/')
    cy.get('a[href*="terms"]').click()
    cy.url().should('include', '/terms')
    cy.get('h1').contains('Terms of Service')
  })

  it('should navigate to the Refund Policy page', () => {
    cy.visit('/')
    cy.get('a[href*="refund"]').click()
    cy.url().should('include', '/refund')
    cy.get('h1').contains('Refund Policy')
  })

  it('should style the active page link', () => {
    cy.visit('/privacy')
    cy.get('a[href*="privacy"]').should('have.class', 'active')
  })
})
