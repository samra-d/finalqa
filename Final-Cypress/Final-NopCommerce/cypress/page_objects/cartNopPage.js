class cartPage {

    termsOfServiceBtn() {
        return cy.get("#termsofservice");
    }

    checkoutBtn() {
        return cy.get('#checkout')
    }
}

module.exports = new cartPage();