class cartPage {

    firstProductBtn() {
        return cy.get('[data-cy="Espresso"]');
    }

    secondProductBtn() {
        return cy.get('[data-cy="Espresso-Macchiato"]');
    }

    thirdProductBtn() {
        return cy.get('[data-cy="Cappuccino"]');
    }

    extraProductBtn() {
        return cy.get('.yes');
    }

    cartBtn() {
        return cy.get(':nth-child(2) > a');
    }

    removeLastProductBtn() {
        return cy.get(':nth-child(5) > :nth-child(4) > .delete');
    }

    totalBtn() {
        return cy.get('[data-test="checkout"]');
    }
}

module.exports = new cartPage();