export class CommonPageElements{
    static get topMenu(){
        return{
            get home(){
                return cy.get('li.active a');//  Home
            },
            get contact(){
                return cy.get('a[data-target="#exampleModal"]');
            },
            get aboutUs(){
                return cy.get('a[data-target="#videoModal"]');
            },
            get cart(){
                return cy.get('a#cartur');
            },
            get logIn(){
                return cy.get('a[data-target="#logInModal"]');
            },
            get signUp(){
                return cy.get('a[data-target="#signInModal"]');
            },   
        };
    }
}