describe('App loads as expected', () => {
  it('displays the flex, grid and home buttons', () => {
    cy.visit('/')

    // defaults to the home button
    cy.contains('Home').should('not.have.class', 'button-outline')

    // flex button
    cy.contains('@react-css/flex')
      .should('have.class', 'button-outline')
      .click()
      .should('not.have.class', 'button-outline')
    cy.url().should('include', '/flex')

    // grid button
    cy.contains('@react-css/grid')
      .should('have.class', 'button-outline')
      .click()
      .should('not.have.class', 'button-outline')
    cy.url().should('include', '/grid')

    // home button
    cy.contains('Home').should('have.class', 'button-outline').click().should('not.have.class', 'button-outline')
    cy.url().should('include', '/')
  })
})
