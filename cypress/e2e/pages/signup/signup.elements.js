export class SignupElements{

    static get texboxes(){
        return {
            get username(){
                return cy.get('input#sign-username');
            },
            get password(){
                return cy.get('input#sign-password');
            }
        };
    }


    static get buttons(){
        return{
            get signup(){
                return cy.contains('button', 'Sign up');
            }
        };
    }
}