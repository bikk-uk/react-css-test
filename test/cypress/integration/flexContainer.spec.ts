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

  it('displays a warning if duplicate flex-direction are used', () => {
    Cypress.on('window:before:load', (win) => {
      cy.spy(win.console, 'error')
      cy.spy(win.console, 'warn')
    })

    goToFlexContainer()

    // the first style was applied, the duplicate was ignored
    isFlexContainerAnd('flex-container-flexDirection-warning').should('have.css', 'flex-direction', 'column')

    cy.window().then((win) => {
      expect(win.console.error).to.have.callCount(0)
      expect(win.console.warn).to.have.callCount(1)
      expect(win.console.warn).to.have.been.calledWith(
        '[@react-css/flex] Multiple values have been provided for flex-direction.',
      )
    })
  })
})
