describe('user registration', () => {
  it('should load home page, title and log in', () => {
    cy.visit('/');
    cy.wait(2000)
    cy.title().then((title) => {
      cy.log('Page Title:', title)
      expect(title).to.eq('Swag Labs')
    })
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[id= "login-button"]').click()
  })
  cy.wait(3000) // 3 seconds

})
