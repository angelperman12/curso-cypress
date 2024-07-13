const { CartMethods } = require("./pages/cart/cart.methods")
const { HomeMethods } = require("./pages/home/home.methods")
const { LoginMethods } = require("./pages/login/login.methods")
const { ProductDetailsMethods } = require("./pages/product-details/product-details.methods")
const { SignupMethods } = require("./pages/signup/signup.methods")
const { Logger } = require("./util/logger")

describe('template spec', () => {
  it('passes', () => {

    Logger.stepNUmber(1)
    Logger.step('Página de inicio')
    cy.visit('https://www.demoblaze.com/')
    //cy.get('a[data-target="#signInModal"]').click()
    //SignupMethods.signup('user1', 'user1')
    cy.wait(5000)
  })
})