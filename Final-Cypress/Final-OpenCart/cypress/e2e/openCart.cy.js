import registerCartUser from "../page_objects/registerCartUser";
import productCartPage from "../page_objects/productCartPage"
import shoppingCartPage from "../page_objects/shoppingCartPage";
import orderHistoryPage from "../page_objects/orderHistoryPage";



describe ('OpenCart', () => {

    it('Register and Purchase', () => {
        
        cy.registerForm();
        
        productCartPage.desktopsBtn().click();
        productCartPage.productBtn().click();
        productCartPage.addToCartBtn().click();
        productCartPage.openCartBtn().click();

        cy.cartForm();

        orderHistoryPage.myAccountBtn().click();
        orderHistoryPage.orderHistoryBtn().click();
        orderHistoryPage.continueBtn().click();

       
    })
})