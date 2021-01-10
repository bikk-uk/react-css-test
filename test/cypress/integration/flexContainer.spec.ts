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

  it('handles custom styles', () => {
    isFlexContainerAnd('flex-container-custom-styles')
      .should('have.css', 'width', '3px')
      .should('have.css', 'height', '4px')
  })

  it('handles an inline flex container', () => {
    cy.get('[data-testid="flex-container-inline"]').should('have.css', 'display', 'inline-flex')
  })

  it('handles the flex-direction property', () => {
    isFlexContainerAnd('flex-container-flexDirection').should('have.css', 'flex-direction', 'row-reverse')
  })

  it('handles the flex-direction row shortcut property', () => {
    isFlexContainerAnd('flex-container-flexDirectionRow').should('have.css', 'flex-direction', 'row')
  })

  it('handles the flex-direction row-reverse shortcut property', () => {
    isFlexContainerAnd('flex-container-flexDirectionRowReverse').should('have.css', 'flex-direction', 'row-reverse')
  })

  it('handles the flex-direction column shortcut property', () => {
    isFlexContainerAnd('flex-container-flexDirectionColumn').should('have.css', 'flex-direction', 'column')
  })

  it('handles the flex-direction column-reverse shortcut property', () => {
    isFlexContainerAnd('flex-container-flexDirectionColumnReverse').should(
      'have.css',
      'flex-direction',
      'column-reverse',
    )
  })
})
