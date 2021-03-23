export const goToFlex = (): void => {
  cy.visit('/')
  cy.contains('@react-css/flex').click()
  cy.url().should('include', '/flex')
}

export const goToFlexContainer = (): void => {
  goToFlex()
  cy.contains('Flex Container').click()
  cy.url().should('include', '/flex')
}

export const goToFlexItem = (): void => {
  goToFlex()
  cy.contains('Flex Item').click()
  cy.url().should('include', '/flex')
}

export const goToGrid = (): void => {
  cy.visit('/')
  cy.contains('@react-css/grid').click()
  cy.url().should('include', '/grid')
}

export const goToGridContainer = (): void => {
  goToGrid()
  cy.contains('Grid Container').click()
  cy.url().should('include', '/grid')
}