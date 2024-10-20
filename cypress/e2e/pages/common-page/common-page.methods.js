import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethos{
    static navigateToDemoBla(){
        cy.clearCookies();
        cy.visit(CommonPageData.url);
    }

    static clickOnHomeOption(){
        CommonPageElements.topMenu.home.click();
    }
    static clickOnContactOption(){
        CommonPageElements.topMenu.contact.click();
    }
    static clickOnAboutUsOption(){
        CommonPageElements.topMenu.aboutUs.click();
    }
    static clickOnCartOption(){
        CommonPageElements.topMenu.cart.click();
    }
    static clickOnLogInOption(){
        CommonPageElements.topMenu.logIn.click();
    }
    static clickOnSignUpOption(){
        CommonPageElements.topMenu.signUp.click();
    }

    static verifyAlert(expectedMessage){
        cy.on("window:alert", (str) => {
            expect(str).to.equal(expectedMessage);
        });
    }
}
