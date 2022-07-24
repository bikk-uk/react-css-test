// Helpers
import { goToGrid } from '../helpers/goTo'

describe('Grid', () => {
  it('displays the grid item button', () => {
    goToGrid()
    // does not default to the grid item
    cy.contains('Grid Item').should('have.class', 'button-outline').click().should('not.have.class', 'button-outline')
    cy.url().should('include', '/grid')
  })

  it('displays the grid container button', () => {
    goToGrid()
    // defaults to the grid container
    cy.contains('Grid Container')
      .should('not.have.class', 'button-outline')
      .click()
      .should('not.have.class', 'button-outline')
    cy.url().should('include', '/grid')
  })
})
