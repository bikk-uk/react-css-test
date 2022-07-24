// Helpers
import { goToFlexContainer } from '../helpers/goTo'
import { isFlexContainer, isFlexContainerAnd } from '../helpers/isContainerAnd'

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

  it('handles being explicitly rendered as a <div />', () => {
    isFlexContainerAnd('flex-container-as-div').should('have.prop', 'nodeName', 'DIV')
  })

  it('handles being rendered as a <nav />', () => {
    isFlexContainerAnd('flex-container-as-nav').should('have.prop', 'nodeName', 'NAV')
  })

  it('handles being rendered as a <main />', () => {
    isFlexContainerAnd('flex-container-as-main').should('have.prop', 'nodeName', 'MAIN')
  })

  it('handles being rendered as an <aside />', () => {
    isFlexContainerAnd('flex-container-as-aside').should('have.prop', 'nodeName', 'ASIDE')
  })

  it('handles being rendered as an <article />', () => {
    isFlexContainerAnd('flex-container-as-article').should('have.prop', 'nodeName', 'ARTICLE')
  })

  it('handles being rendered as a <header />', () => {
    isFlexContainerAnd('flex-container-as-header').should('have.prop', 'nodeName', 'HEADER')
  })

  it('handles being rendered as a <section />', () => {
    isFlexContainerAnd('flex-container-as-section').should('have.prop', 'nodeName', 'SECTION')
  })

  it('handles being rendered as a <footer />', () => {
    isFlexContainerAnd('flex-container-as-footer').should('have.prop', 'nodeName', 'FOOTER')
  })

  it('handles an inline flex container', () => {
    cy.get('[data-testid="flex-container-inline"]').should('have.css', 'display', 'inline-flex')
  })

  it('handles the gap property', () => {
    switch (Cypress.browser.name) {
      case 'firefox':
        isFlexContainerAnd('flex-container-gap')
          .should('have.css', 'row-gap', '10px')
          .should('have.css', 'column-gap', '10px')
        break
      default:
        isFlexContainerAnd('flex-container-gap').should('have.css', 'gap', '10px')
    }
  })

  it('handles the row-gap property', () => {
    isFlexContainerAnd('flex-container-rowGap').should('have.css', 'row-gap', '50px')
  })

  it('handles the column-gap property', () => {
    isFlexContainerAnd('flex-container-columnGap').should('have.css', 'column-gap', '100px')
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

  it('handles the flex-wrap property', () => {
    isFlexContainerAnd('flex-container-flexWrap').should('have.css', 'flex-wrap', 'nowrap')
  })

  it('handles the flex-wrap wrap shortcut property', () => {
    isFlexContainerAnd('flex-container-flexWrapWrap').should('have.css', 'flex-wrap', 'wrap')
  })

  it('handles the flex-wrap no-wrap shortcut property', () => {
    isFlexContainerAnd('flex-container-flexWrapNoWrap').should('have.css', 'flex-wrap', 'nowrap')
  })

  it('handles the flex-wrap wrap-reverse shortcut property', () => {
    isFlexContainerAnd('flex-container-flexWrapWrapReverse').should('have.css', 'flex-wrap', 'wrap-reverse')
  })

  it('handles the justify-content property', () => {
    isFlexContainerAnd('flex-container-justifyContent').should('have.css', 'justify-content', 'flex-start')
  })

  it('handles the justify-content flex-start shortcut property', () => {
    isFlexContainerAnd('flex-container-justifyContentJustifyStart').should('have.css', 'justify-content', 'flex-start')
  })

  it('handles the justify-content flex-end shortcut property', () => {
    isFlexContainerAnd('flex-container-justifyContentJustifyEnd').should('have.css', 'justify-content', 'flex-end')
  })

  it('handles the justify-content center shortcut property', () => {
    isFlexContainerAnd('flex-container-justifyContentJustifyCenter').should('have.css', 'justify-content', 'center')
  })

  it('handles the justify-content space-between shortcut property', () => {
    isFlexContainerAnd('flex-container-justifyContentJustifySpaceBetween').should(
      'have.css',
      'justify-content',
      'space-between',
    )
  })

  it('handles the justify-content space-around shortcut property', () => {
    isFlexContainerAnd('flex-container-justifyContentJustifySpaceAround').should(
      'have.css',
      'justify-content',
      'space-around',
    )
  })

  it('handles the align-items property', () => {
    isFlexContainerAnd('flex-container-alignItems').should('have.css', 'align-items', 'flex-end')
  })

  it('handles the align-items flex-start shortcut property', () => {
    isFlexContainerAnd('flex-container-alignItemsAlignItemsStart').should('have.css', 'align-items', 'flex-start')
  })

  it('handles the align-items flex-end shortcut property', () => {
    isFlexContainerAnd('flex-container-alignItemsAlignItemsEnd').should('have.css', 'align-items', 'flex-end')
  })

  it('handles the align-items center shortcut property', () => {
    isFlexContainerAnd('flex-container-alignItemsAlignItemsCenter').should('have.css', 'align-items', 'center')
  })

  it('handles the align-items baseline shortcut property', () => {
    isFlexContainerAnd('flex-container-alignItemsAlignItemsBaseline').should('have.css', 'align-items', 'baseline')
  })

  it('handles the align-items stretch shortcut property', () => {
    isFlexContainerAnd('flex-container-alignItemsAlignItemsStretch').should('have.css', 'align-items', 'stretch')
  })

  it('handles the align-content property', () => {
    isFlexContainerAnd('flex-container-alignContent').should('have.css', 'align-content', 'space-around')
  })

  it('handles the align-content start shortcut property', () => {
    isFlexContainerAnd('flex-container-alignContentAlignContentStart').should('have.css', 'align-content', 'flex-start')
  })

  it('handles the align-content end shortcut property', () => {
    isFlexContainerAnd('flex-container-alignContentAlignContentEnd').should('have.css', 'align-content', 'flex-end')
  })

  it('handles the align-content center shortcut property', () => {
    isFlexContainerAnd('flex-container-alignContentAlignContentCenter').should('have.css', 'align-content', 'center')
  })

  it('handles the align-content space-between shortcut property', () => {
    isFlexContainerAnd('flex-container-alignContentAlignContentSpaceBetween').should(
      'have.css',
      'align-content',
      'space-between',
    )
  })

  it('handles the align-content space-around shortcut property', () => {
    isFlexContainerAnd('flex-container-alignContentAlignContentSpaceAround').should(
      'have.css',
      'align-content',
      'space-around',
    )
  })

  it('handles the align-content stretch shortcut property', () => {
    isFlexContainerAnd('flex-container-alignContentAlignContentStretch').should('have.css', 'align-content', 'stretch')
  })

  it('handles the flex-flow property', () => {
    switch (Cypress.browser.name) {
      case 'firefox':
        isFlexContainerAnd('flex-container-flexFlow')
          .should('have.css', 'flex-direction', 'row')
          .should('have.css', 'flex-wrap', 'nowrap')
        break
      default:
        isFlexContainerAnd('flex-container-flexFlow').should('have.css', 'flex-flow', 'row nowrap')
    }
  })
})
