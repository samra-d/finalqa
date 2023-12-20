import registerCartUser from "../page_objects/registerCartUser"
import { faker } from "@faker-js/faker";
import shoppingCartPage from "../page_objects/shoppingCartPage";

Cypress.Commands.add('visitOpenCart', () => {
    cy.visit('https://demo-opencart.com/')
})

Cypress.Commands.add("textCheck", (selector, text) => {
    selector.should("have.text", text);
  });

Cypress.Commands.add('registerForm', () => {
    cy.fixture("data").then((data) => {

    registerCartUser.myAccountBtn().click();
    registerCartUser.registerUserBtn().click();

    registerCartUser.firstNameInp().type(data.firstName);
    registerCartUser.lastNameInp().type(data.lastName);

    let email = faker.internet.email()
    registerCartUser.emailInp().type(email);

    registerCartUser.telephoneInp().type(data.telephone);
    registerCartUser.passwordInp().type(data.password);
    registerCartUser.passwordConfirmInp().type(data.password);
    registerCartUser.subscribeBtn().click();
    registerCartUser.privacyPolicyBtn().check();
    registerCartUser.continueBtn().click();

    })
})


Cypress.Commands.add('cartForm', () => {
    cy.fixture("data").then((data) => {

        shoppingCartPage.checkoutBtn().click();
        shoppingCartPage.firstNameInp().type(data.firstName);
        shoppingCartPage.lastNameInp().type(data.lastName);
        shoppingCartPage.addressInp().type(data.address);
        shoppingCartPage.cityInp().type(data.city);
        shoppingCartPage.postCodeInp().type(data.postCode);
        shoppingCartPage.countryInp().select(data.country);
        shoppingCartPage.regionStateInp().select(data.region);
        shoppingCartPage.continueBtn().click();
        shoppingCartPage.deliveryContinueBtn().click();
        shoppingCartPage.shippingContinueBtn().click();
        shoppingCartPage.termsAndConditionsBtn().check();
        shoppingCartPage.paymentContinueBtn().click();
        shoppingCartPage.confirmOrderBtn().click();

    })

})



