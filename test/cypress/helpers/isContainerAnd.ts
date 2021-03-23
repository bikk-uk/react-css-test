export const isFlexContainerAnd = (testId: string): Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy.get(`[data-testid="${testId}"]`).should('have.css', 'display', 'flex')
}

export const isFlexContainer = (testId: string): void => {
  isFlexContainerAnd(testId)
}

export const isGridContainerAnd = (testId: string): Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy.get(`[data-testid="${testId}"]`).should('have.css', 'display', 'grid')
}

export const isGridContainer = (testId: string): void => {
  isGridContainerAnd(testId)
}
