// Helpers
import { goToFlex } from '../helpers/goTo'

describe('Flex', () => {
  it('displays the flex item button', () => {
    goToFlex()
    // does not default to the flex item
    cy.contains('Flex Item').should('have.class', 'button-outline').click().should('not.have.class', 'button-outline')
    cy.url().should('include', '/flex')
  })

  it('displays the flex container button', () => {
    goToFlex()
    // defaults to the flex container
    cy.contains('Flex Container')
      .should('not.have.class', 'button-outline')
      .click()
      .should('not.have.class', 'button-outline')
    cy.url().should('include', '/flex')
  })
})
