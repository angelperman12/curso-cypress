const { LoginMethods } = require("./pages/login/login.methods")

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login('usermuylargo', 'passmuylargo')
    cy.wait(10000)
  })
})