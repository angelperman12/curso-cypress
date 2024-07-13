export class tyfypElements{
    static icons(){
        return{
            get greenCheckMark(){
                return cy.get('div.sa-placeholder');
            },
        };
    }

    static button(){
        return{
            get  btnok(){
                return cy.contains('button', 'OK');
            },
        };
    }
}