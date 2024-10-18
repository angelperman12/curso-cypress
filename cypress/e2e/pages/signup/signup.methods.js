import { CommonPageMethos } from "../common-page/common-page.methods";
import { SignupElements } from "./signup.elements";

export class SignupMethods{
    static insertUsername(username){
        SignupElements.texboxes.username.invoke('val', username);
    }

    static insertPassword(password){
        SignupElements.texboxes.password.invoke('val', password);
    }

    static clickOnSingup(){
        SignupElements.buttons.signup.click();
    }

    static signup(username, password){
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSingup();
    }

    static verifySingUpSuccesfulMessageIsDisplayed(){
        CommonPageMethos.verifyAlert("Sign up successful.");
    }
}