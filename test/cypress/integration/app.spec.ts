describe('App loads as expected', () => {
  it('displays the flex, grid and home buttons', () => {
    cy.visit('/')

    cy.contains('Home')

    cy.contains('@react-css/flex').click()
    cy.url().should('include', '/flex')

    cy.contains('@react-css/grid').click()
    cy.url().should('include', '/grid')

    cy.contains('Home').click()
    cy.url().should('include', '/')
  })
})
