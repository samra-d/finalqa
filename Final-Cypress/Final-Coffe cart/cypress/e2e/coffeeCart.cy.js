import coffeeCartPage from "../page_objects/coffeeCartPage";

describe('CoffeCart', () => {

    

    it('Load Coffe Cart Page', () => {

        cy.cartForm();

        cy.paymentForm();
        
    })
})