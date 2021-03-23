// Helpers
import { goToGridContainer } from '../helpers/goTo'
import { isGridContainer, isGridContainerAnd } from '../helpers/isGridContainerAnd'

describe('Grid Container', () => {
  beforeEach(() => {
    goToGridContainer()
  })

  it('handles a default grid container', () => {
    isGridContainer('grid-container-default')
  })

  it('handles custom styles', () => {
    isGridContainerAnd('grid-container-custom-styles')
      .should('have.css', 'width', '5px')
      .should('have.css', 'height', '6px')
  })

  it('handles an inline grid container', () => {
    cy.get('[data-testid="grid-container-inline"]').should('have.css', 'display', 'inline-grid')
  })

  it('handles the grid-template-rows property', () => {
    isGridContainerAnd('grid-container-rows').should('have.css', 'grid-template-rows', '2px 5px 4px')
  })

  it('handles the grid-template-columns property', () => {
    isGridContainerAnd('grid-container-columns').should('have.css', 'grid-template-columns', '1px 2px 3px')
  })

  it('handles the gap property', () => {
    switch (Cypress.browser.name) {
      case 'firefox':
        isGridContainerAnd('grid-container-gap')
          .should('have.css', 'row-gap', '5px')
          .should('have.css', 'column-gap', '5px')
        break
      default:
        isGridContainerAnd('grid-container-gap').should('have.css', 'gap', '5px')
    }
  })

  it('handles the row-gap property', () => {
    isGridContainerAnd('grid-container-rowGap').should('have.css', 'row-gap', '10px')
  })

  it('handles the column-gap property', () => {
    isGridContainerAnd('grid-container-columnGap').should('have.css', 'column-gap', '2px')
  })

  it('handles the justify-items property', () => {
    isGridContainerAnd('grid-container-justifyItems').should('have.css', 'justify-items', 'end')
  })

  it('handles the justify-items start shortcut property', () => {
    isGridContainerAnd('grid-container-justifyItemsJustifyItemsStart').should('have.css', 'justify-items', 'start')
  })

  it('handles the justify-items end shortcut property', () => {
    isGridContainerAnd('grid-container-justifyItemsJustifyItemsEnd').should('have.css', 'justify-items', 'end')
  })

  it('handles the justify-items center shortcut property', () => {
    isGridContainerAnd('grid-container-justifyItemsJustifyItemsCenter').should('have.css', 'justify-items', 'center')
  })

  it('handles the justify-items stretch shortcut property', () => {
    isGridContainerAnd('grid-container-justifyItemsJustifyItemsStretch').should('have.css', 'justify-items', 'stretch')
  })

  it('handles the align-items property', () => {
    isGridContainerAnd('grid-container-alignItems').should('have.css', 'align-items', 'end')
  })

  it('handles the align-items start shortcut property', () => {
    isGridContainerAnd('grid-container-alignItemsAlignItemsStart').should('have.css', 'align-items', 'start')
  })

  it('handles the align-items end shortcut property', () => {
    isGridContainerAnd('grid-container-alignItemsAlignItemsEnd').should('have.css', 'align-items', 'end')
  })

  it('handles the align-items center shortcut property', () => {
    isGridContainerAnd('grid-container-alignItemsAlignItemsCenter').should('have.css', 'align-items', 'center')
  })

  it('handles the align-items stretch shortcut property', () => {
    isGridContainerAnd('grid-container-alignItemsAlignItemsStretch').should('have.css', 'align-items', 'stretch')
  })

  it('handles the justify-content property', () => {
    isGridContainerAnd('grid-container-justifyContent').should('have.css', 'justify-content', 'space-between')
  })

  it('handles the justify-content start shortcut property', () => {
    isGridContainerAnd('grid-container-justifyContentJustifyContentStart').should(
      'have.css',
      'justify-content',
      'start',
    )
  })

  it('handles the justify-content end shortcut property', () => {
    isGridContainerAnd('grid-container-justifyContentJustifyContentEnd').should('have.css', 'justify-content', 'end')
  })

  it('handles the justify-content center shortcut property', () => {
    isGridContainerAnd('grid-container-justifyContentJustifyContentCenter').should(
      'have.css',
      'justify-content',
      'center',
    )
  })

  it('handles the justify-content stretch shortcut property', () => {
    isGridContainerAnd('grid-container-justifyContentJustifyContentStretch').should(
      'have.css',
      'justify-content',
      'stretch',
    )
  })

  it('handles the justify-content space-around shortcut property', () => {
    isGridContainerAnd('grid-container-justifyContentJustifyContentSpaceAround').should(
      'have.css',
      'justify-content',
      'space-around',
    )
  })

  it('handles the justify-content space-between shortcut property', () => {
    isGridContainerAnd('grid-container-justifyContentJustifyContentSpaceBetween').should(
      'have.css',
      'justify-content',
      'space-between',
    )
  })

  it('handles the justify-content space-evenly shortcut property', () => {
    isGridContainerAnd('grid-container-justifyContentJustifyContentSpaceEvenly').should(
      'have.css',
      'justify-content',
      'space-evenly',
    )
  })

  it('handles the grid-auto-flow property', () => {
    // Firefox works as expected, Chrome adds additional values
    switch (Cypress.browser.name) {
      case 'firefox':
        isGridContainerAnd('grid-container-autoFlow').should('have.css', 'grid-auto-flow', 'dense')
        break
      default:
        isGridContainerAnd('grid-container-autoFlow').should('have.css', 'grid-auto-flow', 'row dense')
    }
  })

  it('handles the grid-auto-flow row shortcut property', () => {
    isGridContainerAnd('grid-container-autoFlowAutoFlowRow').should('have.css', 'grid-auto-flow', 'row')
  })

  it('handles the grid-auto-flow column shortcut property', () => {
    isGridContainerAnd('grid-container-autoFlowAutoFlowColumn').should('have.css', 'grid-auto-flow', 'column')
  })

  it('handles the grid-auto-flow dense shortcut property', () => {
    // Firefox works as expected, Chrome adds additional values
    switch (Cypress.browser.name) {
      case 'firefox':
        isGridContainerAnd('grid-container-autoFlowAutoFlowDense').should('have.css', 'grid-auto-flow', 'dense')
        break
      default:
        isGridContainerAnd('grid-container-autoFlowAutoFlowDense').should('have.css', 'grid-auto-flow', 'row dense')
    }
  })

  it('handles the grid-auto-rows property', () => {
    isGridContainerAnd('grid-container-autoRows').should('have.css', 'grid-auto-rows', '5px')
  })

  it('handles the grid-auto-columns property', () => {
    isGridContainerAnd('grid-container-autoColumns').should('have.css', 'grid-auto-columns', 'min-content')
  })

  it('handles the grid-template property', () => {
    isGridContainerAnd('grid-container-template')
      .should('have.css', 'grid-template-rows', '10px 10px')
      .should('have.css', 'grid-template-columns', '5px 5px')
      .should('have.css', 'grid-template-areas', 'none')
  })

  it('handles the place-items property', () => {
    isGridContainerAnd('grid-container-placeItems')
      .should('have.css', 'align-items', 'center')
      .should('have.css', 'justify-items', 'start')
  })

  it('handles the place-content property', () => {
    isGridContainerAnd('grid-container-placeContent')
      .should('have.css', 'align-content', 'end')
      .should('have.css', 'justify-content', 'center')
  })
})
