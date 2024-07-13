import { tyfypElements } from "./thank-you-for-you-purchase.elements";

export class tyfypMethods{
    static success(){
        tyfypElements.icons.greenCheckMark.should('exist');
    }

    static clickOnOkBUtton(){
        tyfypElements.button.btnok.click();
    }
}