export const isGridContainerAnd = (testId: string): Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy.get(`[data-testid="${testId}"]`).should('have.css', 'display', 'grid')
}

export const isGridContainer = (testId: string): void => {
  isGridContainerAnd(testId)
}

export default isGridContainerAnd
