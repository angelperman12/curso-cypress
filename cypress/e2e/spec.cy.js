const { LoginMethods } = require("./pages/login/login.methods")



describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login('user', 'pass')
    cy.wait(10000)
  })
})