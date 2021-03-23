// Helpers
import { goToFlexItem } from '../helpers/goTo'
import { hasFlexContainer } from '../helpers/hasContainer'

describe('Flex Item', () => {
  beforeEach(() => {
    goToFlexItem()
  })

  it('handles a default flex item', () => {
    hasFlexContainer('flex-item-default-container')
    const flexItem = '[data-testid="flex-item-default"]'
    cy.get(flexItem).should('not.have.css', 'display', 'flex')
  })

  it('handles custom styles', () => {
    hasFlexContainer('flex-item-custom-styles-container')
    const flexItem = '[data-testid="flex-item-custom-styles"]'
    cy.get(flexItem).should('have.css', 'width', '1px').should('have.css', 'height', '2px')
  })

  it('handles the order property', () => {
    hasFlexContainer('flex-item-order-container')
    const flexItem = '[data-testid="flex-item-order"]'
    cy.get(flexItem).should('have.css', 'order', '5')
  })

  it('handles the grow property', () => {
    hasFlexContainer('flex-item-grow-container')
    const flexItem = '[data-testid="flex-item-grow"]'
    cy.get(flexItem).should('have.css', 'flex-grow', '2')
  })

  it('handles the shrink property', () => {
    hasFlexContainer('flex-item-shrink-container')
    const flexItem = '[data-testid="flex-item-shrink"]'
    cy.get(flexItem).should('have.css', 'flex-shrink', '3')
  })

  it('handles the basis property', () => {
    hasFlexContainer('flex-item-basis-container')
    const flexItem = '[data-testid="flex-item-basis"]'
    cy.get(flexItem).should('have.css', 'flex-basis', '0px')
  })

  it('handles the flex property shorthand', () => {
    hasFlexContainer('flex-item-flex-container')
    const flexItem = '[data-testid="flex-item-flex"]'
    cy.get(flexItem)
      .should('have.css', 'flex-grow', '1')
      .should('have.css', 'flex-shrink', '2')
      .should('have.css', 'flex-basis', '5px')
  })

  it('handles the align-self property', () => {
    hasFlexContainer('flex-item-alignSelf-container')
    const flexItem = '[data-testid="flex-item-alignSelf"]'
    cy.get(flexItem).should('have.css', 'align-self', 'flex-start')
  })

  it('handles the align-self auto shortcut property', () => {
    hasFlexContainer('flex-item-alignSelfAuto-container')
    const flexItem = '[data-testid="flex-item-alignSelfAuto"]'
    cy.get(flexItem).should('have.css', 'align-self', 'auto')
  })

  it('handles the align-self start shortcut property', () => {
    hasFlexContainer('flex-item-alignSelfStart-container')
    const flexItem = '[data-testid="flex-item-alignSelfStart"]'
    cy.get(flexItem).should('have.css', 'align-self', 'flex-start')
  })

  it('handles the align-self end shortcut property', () => {
    hasFlexContainer('flex-item-alignSelfEnd-container')
    const flexItem = '[data-testid="flex-item-alignSelfEnd"]'
    cy.get(flexItem).should('have.css', 'align-self', 'flex-end')
  })

  it('handles the align-self center shortcut property', () => {
    hasFlexContainer('flex-item-alignSelfCenter-container')
    const flexItem = '[data-testid="flex-item-alignSelfCenter"]'
    cy.get(flexItem).should('have.css', 'align-self', 'center')
  })

  it('handles the align-self baseline shortcut property', () => {
    hasFlexContainer('flex-item-alignSelfBaseline-container')
    const flexItem = '[data-testid="flex-item-alignSelfBaseline"]'
    cy.get(flexItem).should('have.css', 'align-self', 'baseline')
  })

  it('handles the align-self stretch shortcut property', () => {
    hasFlexContainer('flex-item-alignSelfStretch-container')
    const flexItem = '[data-testid="flex-item-alignSelfStretch"]'
    cy.get(flexItem).should('have.css', 'align-self', 'stretch')
  })
})
