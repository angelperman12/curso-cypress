export class HomeElements{
    static get categoriesMenu(){
        return{
            get phone(){
                return cy.contains('a', 'Phones');
            },
            get laptops(){
                return cy.contains('a', 'Laptops');
            },
            get monitors(){
                return cy.contains('a', 'Monitors');
            },
        };
    }
    //Este es un selector dinámico para los productos que se encuentran en el home
    static product(productName){
        return cy.contains('a', productName)
    }

}