export class CartElements{
    static get buttons(){
        return{
            get placeOrder(){
                return cy.get('button[data-toggle="modal"]');
            },
        };
    }
// este es un selector dinamico que permite eliminar un producto de un carrito de compras.
    static get links(){
        return{
            delete(productName){
                return cy.contains('td', productName).closest('tr').find('a');
            },
        };
    }
}