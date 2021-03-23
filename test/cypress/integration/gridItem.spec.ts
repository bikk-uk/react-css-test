// Helpers
import { goToGridItem } from '../helpers/goTo'
import { hasGridContainer } from '../helpers/hasContainer'

describe('Grid Item', () => {
  beforeEach(() => {
    goToGridItem()
  })

  it('handles a default grid item', () => {
    hasGridContainer('grid-item-default-container')
    const gridItem = '[data-testid="grid-item-default"]'
    cy.get(gridItem).should('not.have.css', 'display', 'grid')
  })

  it('handles custom styles', () => {
    hasGridContainer('grid-item-custom-styles-container')
    const gridItem = '[data-testid="grid-item-custom-styles"]'
    cy.get(gridItem).should('have.css', 'width', '2px').should('have.css', 'height', '4px')
  })

  it('handles the grid-column-start property', () => {
    hasGridContainer('grid-item-columnStart-container')
    const gridItem = '[data-testid="grid-item-columnStart"]'
    cy.get(gridItem).should('have.css', 'grid-column-start', '4')
  })

  it('handles the grid-column-end property', () => {
    hasGridContainer('grid-item-columnEnd-container')
    const gridItem = '[data-testid="grid-item-columnEnd"]'
    cy.get(gridItem).should('have.css', 'grid-column-end', '5')
  })

  it('handles the grid-column property', () => {
    hasGridContainer('grid-item-column-container')
    const gridItem = '[data-testid="grid-item-column"]'
    cy.get(gridItem).should('have.css', 'grid-column-start', '3').should('have.css', 'grid-column-end', '4')
  })

  it('handles the grid-row-start property', () => {
    hasGridContainer('grid-item-rowStart-container')
    const gridItem = '[data-testid="grid-item-rowStart"]'
    cy.get(gridItem).should('have.css', 'grid-row-start', 'span 2')
  })

  it('handles the grid-row-end property', () => {
    hasGridContainer('grid-item-rowEnd-container')
    const gridItem = '[data-testid="grid-item-rowEnd"]'
    cy.get(gridItem).should('have.css', 'grid-row-end', 'row1-end')
  })

  it('handles the grid-row property', () => {
    hasGridContainer('grid-item-row-container')
    const gridItem = '[data-testid="grid-item-row"]'
    cy.get(gridItem).should('have.css', 'grid-row-start', '4').should('have.css', 'grid-row-end', '6')
  })

  it('handles the grid-area property', () => {
    hasGridContainer('grid-item-area-container')
    const gridItem = '[data-testid="grid-item-area"]'
    switch (Cypress.browser.name) {
      case 'firefox':
        cy.get(gridItem)
          .should('have.css', 'grid-row-start', '1')
          .should('have.css', 'grid-row-end', '2')
          .should('have.css', 'grid-column-start', '3')
          .should('have.css', 'grid-column-end', '4')
        break
      default:
        cy.get(gridItem).should('have.css', 'grid-area', '1 / 3 / 2 / 4')
    }
  })

  it('handles the justify-self property', () => {
    hasGridContainer('grid-item-justifySelf-container')
    const gridItem = '[data-testid="grid-item-justifySelf"]'
    cy.get(gridItem).should('have.css', 'justify-self', 'center')
  })

  it('handles the justify-self start shortcut property', () => {
    hasGridContainer('grid-item-justifySelfJustifySelfStart-container')
    const gridItem = '[data-testid="grid-item-justifySelfJustifySelfStart"]'
    cy.get(gridItem).should('have.css', 'justify-self', 'start')
  })

  it('handles the justify-self end shortcut property', () => {
    hasGridContainer('grid-item-justifySelfJustifySelfEnd-container')
    const gridItem = '[data-testid="grid-item-justifySelfJustifySelfEnd"]'
    cy.get(gridItem).should('have.css', 'justify-self', 'end')
  })

  it('handles the justify-self center shortcut property', () => {
    hasGridContainer('grid-item-justifySelfJustifySelfCenter-container')
    const gridItem = '[data-testid="grid-item-justifySelfJustifySelfCenter"]'
    cy.get(gridItem).should('have.css', 'justify-self', 'center')
  })

  it('handles the justify-self stretch shortcut property', () => {
    hasGridContainer('grid-item-justifySelfJustifySelfStretch-container')
    const gridItem = '[data-testid="grid-item-justifySelfJustifySelfStretch"]'
    cy.get(gridItem).should('have.css', 'justify-self', 'stretch')
  })

  it('handles the align-self property', () => {
    hasGridContainer('grid-item-alignSelf-container')
    const gridItem = '[data-testid="grid-item-alignSelf"]'
    cy.get(gridItem).should('have.css', 'align-self', 'center')
  })

  it('handles the align-self start shortcut property', () => {
    hasGridContainer('grid-item-alignSelfAlignSelfStart-container')
    const gridItem = '[data-testid="grid-item-alignSelfAlignSelfStart"]'
    cy.get(gridItem).should('have.css', 'align-self', 'start')
  })

  it('handles the align-self end shortcut property', () => {
    hasGridContainer('grid-item-alignSelfAlignSelfEnd-container')
    const gridItem = '[data-testid="grid-item-alignSelfAlignSelfEnd"]'
    cy.get(gridItem).should('have.css', 'align-self', 'end')
  })

  it('handles the align-self center shortcut property', () => {
    hasGridContainer('grid-item-alignSelfAlignSelfCenter-container')
    const gridItem = '[data-testid="grid-item-alignSelfAlignSelfCenter"]'
    cy.get(gridItem).should('have.css', 'align-self', 'center')
  })

  it('handles the align-self stretch shortcut property', () => {
    hasGridContainer('grid-item-alignSelfAlignSelfStretch-container')
    const gridItem = '[data-testid="grid-item-alignSelfAlignSelfStretch"]'
    cy.get(gridItem).should('have.css', 'align-self', 'stretch')
  })

  it('handles the place-self property', () => {
    hasGridContainer('grid-item-placeSelf-container')
    const gridItem = '[data-testid="grid-item-placeSelf"]'
    cy.get(gridItem).should('have.css', 'align-self', 'stretch').should('have.css', 'justify-self', 'end')
  })
})
