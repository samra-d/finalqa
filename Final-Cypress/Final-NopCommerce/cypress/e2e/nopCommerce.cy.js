import registerNopUser from "../page_objects/registerNopUser";
import productNopPage from "../page_objects/productNopPage";
import cartNopPage from "../page_objects/cartNopPage";
import billingNopPage from "../page_objects/billingNopPage";
import shippingNopPage from "../page_objects/shippingNopPage";
import paymentNopPage from "../page_objects/paymentNopPage";




describe('NopCommerce', () => {

   


    it('Register and Purchase', () => {

        registerNopUser.registerBtn().click();

        cy.registerForm();

        registerNopUser.continueRegisterBtn().click();

        cy.loginForm();

        productNopPage.computerBtn().click();
        productNopPage.notebookBtn().click();
        productNopPage.addToCartBtn().click();
        productNopPage.closeBannerBtn().click();
        productNopPage.openCartBtn().click();

        cartNopPage.termsOfServiceBtn().click();
        cartNopPage.checkoutBtn().click();

        cy.billingForm();

        shippingNopPage.shippingBtn().click();
        shippingNopPage.shippingContinueBtn().click();

        paymentNopPage.paymentMethodBtn().click();
        paymentNopPage.paymentContinueBtn().click();

        cy.paymentForm();

        paymentNopPage.paymentConfirmBtn().click();
        
       

    })
})