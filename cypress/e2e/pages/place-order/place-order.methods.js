import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrderMethods{
    static insertName(name){
        PlaceOrderElements.texboxes.name.invoke('val', name);
    }
    static insertCountry(country){
        PlaceOrderElements.texboxes.country.invoke('val', country);
    }
    static insertCity(city){
        PlaceOrderElements.texboxes.city.invoke('val', city);
    }
    static insertCreditCard(creditCardNUmber){
        PlaceOrderElements.texboxes.creditCard.invoke('val', creditCardNUmber);
    }
    static insertMonth(month){
        PlaceOrderElements.texboxes.month.invoke('val', month);
    }
    static insertYear(year){
        PlaceOrderElements.texboxes.year.invoke('val', year);
    }

    static clickOnCloseButton(){
        PlaceOrderElements.buttons.close.click();
    }
    static clickOnPurchaseButton(){
        PlaceOrderElements.buttons.purchase.click();
    }
}