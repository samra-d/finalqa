import paymentBoxPage from "../page_objects/paymentBoxPage";
import {faker} from '@faker-js/faker';
import coffeeCartPage from "../page_objects/coffeeCartPage";

Cypress.Commands.add('visitCoffeeCart', () => {
    cy.visit('https://coffee-cart.netlify.app/');
})

Cypress.Commands.add("textCheck", (selector, text) => {
    selector.should("have.text", text);
  });

  Cypress.Commands.add("cartForm", () => {
    
        coffeeCartPage.firstProductBtn().click();
        coffeeCartPage.secondProductBtn().click();
        coffeeCartPage.thirdProductBtn().click();
        coffeeCartPage.extraProductBtn().click();
        coffeeCartPage.cartBtn().click();
        coffeeCartPage.removeLastProductBtn().click();
        coffeeCartPage.totalBtn().click();
    })



  Cypress.Commands.add("paymentForm", () => {
    cy.fixture("data").then((data) => {

        let firstName = faker.person.firstName();
        paymentBoxPage.firstNameInp().type(firstName);

        let email = faker.internet.email();
        paymentBoxPage.emailInp().type(email);

        paymentBoxPage.promotionBtn().check();
        paymentBoxPage.submitBtn().click();
    })
  })