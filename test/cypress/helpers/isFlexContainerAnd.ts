export const isFlexContainerAnd = (testId: string): Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy.get(`[data-testid="${testId}"]`).should('have.css', 'display', 'flex')
}

export const isFlexContainer = (testId: string): void => {
  isFlexContainerAnd(testId)
}

export default isFlexContainerAnd
