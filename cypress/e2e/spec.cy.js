const { LoginMethods } = require("./pages/login/login.methods")
const { SignupMethods } = require("./pages/signup/signup.methods")

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#signInModal"]').click()
    SignupMethods.signup('user1', 'user1')
    cy.wait(5000)
  })
})