export const hasFlexContainer = (testId: string): void => {
  cy.get(`[data-testid="${testId}"]`).should('have.css', 'display', 'flex')
}

export default hasFlexContainer
