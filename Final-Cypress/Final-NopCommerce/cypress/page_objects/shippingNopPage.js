class shippingPage {
    shippingBtn() {
        return cy.get('#shippingoption_0');
    }

    shippingContinueBtn() {
        return cy.get('#shipping-method-buttons-container > .button-1');
    }
}

module.exports = new shippingPage();