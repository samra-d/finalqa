import './commands'
import { faker } from "@faker-js/faker";

beforeEach(() => {
    cy.visitNopCommerce()
    cy.wrap(faker.person.firstName()).as("userFirstName");
    cy.wrap(faker.person.lastName()).as("userLastName");
    cy.get("@userFirstName").then((firstName) => {
    cy.get("@userLastName").then((lastName) => {
    cy.wrap(firstName + "." + lastName + "@yopmail.com").as("userEmail");
    });
  });
})