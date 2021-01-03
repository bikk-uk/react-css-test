// Helpers
import { goToFlexContainer } from '../helpers/goTo'
import { isFlexContainer, isFlexContainerAnd } from '../helpers/isFlexContainerAnd'

describe('Flex Container', () => {
  beforeEach(() => {
    goToFlexContainer()
  })

  it('handles a default flex container', () => {
    isFlexContainer('flex-container-default')
  })

  it('handles an inline flex container', () => {
    cy.get('[data-testid="flex-container-inline"]').should('have.css', 'display', 'inline-flex')
  })

  it('handles custom styles', () => {
    isFlexContainerAnd('flex-container-custom-styles')
      .should('have.css', 'width', '3px')
      .should('have.css', 'height', '4px')
  })
})
