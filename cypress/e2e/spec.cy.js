const { HomeMethods } = require("./pages/home/home.methods")
const { LoginMethods } = require("./pages/login/login.methods")
const { ProductDetailsMethods } = require("./pages/product-details/product-details.methods")
const { SignupMethods } = require("./pages/signup/signup.methods")

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/prod.html?idp_=1')
    //cy.get('a[data-target="#signInModal"]').click()
    //SignupMethods.signup('user1', 'user1')
    ProductDetailsMethods.clickOnAddToCartButton()

    cy.wait(5000)
  })
})