// Helpers
import { goToFlexItem } from '../helpers/goTo'
import hasFlexContainer from '../helpers/hasFlexContainer'

describe('Flex Item', () => {
  it('handles a default flex item', () => {
    goToFlexItem()

    hasFlexContainer('flex-item-default-container')
    const flexItem = '[data-testid="flex-item-default"]'
    cy.get(flexItem).should('not.have.css', 'display', 'flex')
  })

  it('handles the order property', () => {
    goToFlexItem()

    hasFlexContainer('flex-item-order-container')
    const flexItem = '[data-testid="flex-item-order"]'
    cy.get(flexItem).should('have.css', 'order', '5')
  })

  it('handles the grow property', () => {
    goToFlexItem()

    hasFlexContainer('flex-item-grow-container')
    const flexItem = '[data-testid="flex-item-grow"]'
    cy.get(flexItem).should('have.css', 'flex-grow', '2')
  })

  it('handles the shrink property', () => {
    goToFlexItem()

    hasFlexContainer('flex-item-shrink-container')
    const flexItem = '[data-testid="flex-item-shrink"]'
    cy.get(flexItem).should('have.css', 'flex-shrink', '3')
  })

  it('handles the basis property', () => {
    goToFlexItem()

    hasFlexContainer('flex-item-basis-container')
    const flexItem = '[data-testid="flex-item-basis"]'
    cy.get(flexItem).should('have.css', 'flex-basis', '0px')
  })

  it('handles the flex property', () => {
    goToFlexItem()

    hasFlexContainer('flex-item-flex-container')
    const flexItem = '[data-testid="flex-item-flex"]'
    cy.get(flexItem).should('have.css', 'flex', '1 2 5px')
  })

  it('handles the align-self property', () => {
    goToFlexItem()

    hasFlexContainer('flex-item-alignSelf-container')
    const flexItem = '[data-testid="flex-item-alignSelf"]'
    cy.get(flexItem).should('have.css', 'align-self', 'flex-start')
  })

  it('handles the align-self auto shortcut property', () => {
    goToFlexItem()

    hasFlexContainer('flex-item-alignSelfAuto-container')
    const flexItem = '[data-testid="flex-item-alignSelfAuto"]'
    cy.get(flexItem).should('have.css', 'align-self', 'auto')
  })

  it('handles the align-self start shortcut property', () => {
    goToFlexItem()

    hasFlexContainer('flex-item-alignSelfStart-container')
    const flexItem = '[data-testid="flex-item-alignSelfStart"]'
    cy.get(flexItem).should('have.css', 'align-self', 'flex-start')
  })

  it('handles the align-self end shortcut property', () => {
    goToFlexItem()

    hasFlexContainer('flex-item-alignSelfEnd-container')
    const flexItem = '[data-testid="flex-item-alignSelfEnd"]'
    cy.get(flexItem).should('have.css', 'align-self', 'flex-end')
  })

  it('handles the align-self center shortcut property', () => {
    goToFlexItem()

    hasFlexContainer('flex-item-alignSelfCenter-container')
    const flexItem = '[data-testid="flex-item-alignSelfCenter"]'
    cy.get(flexItem).should('have.css', 'align-self', 'center')
  })

  it('handles the align-self baseline shortcut property', () => {
    goToFlexItem()

    hasFlexContainer('flex-item-alignSelfBaseline-container')
    const flexItem = '[data-testid="flex-item-alignSelfBaseline"]'
    cy.get(flexItem).should('have.css', 'align-self', 'baseline')
  })

  it('handles the align-self stretch shortcut property', () => {
    goToFlexItem()

    hasFlexContainer('flex-item-alignSelfStretch-container')
    const flexItem = '[data-testid="flex-item-alignSelfStretch"]'
    cy.get(flexItem).should('have.css', 'align-self', 'stretch')
  })

  it('displays a warning if duplicate shortcuts are used', () => {
    Cypress.on('window:before:load', (win) => {
      cy.spy(win.console, 'error')
      cy.spy(win.console, 'warn')
    })

    goToFlexItem()

    hasFlexContainer('flex-item-alignSelf-warning-container')
    const flexItem = '[data-testid="flex-item-alignSelf-warning"]'

    // the first style was applied, the duplicate was ignored
    cy.get(flexItem).should('have.css', 'align-self', 'center')

    cy.window().then((win) => {
      expect(win.console.error).to.have.callCount(0)
      expect(win.console.warn).to.have.callCount(1)
      expect(win.console.warn).to.have.been.calledWith(
        '[@react-css/flex] Multiple values have been provided for align-self.',
      )
    })
  })
})
