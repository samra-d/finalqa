class paymentBox {
    firstNameInp() {
        return cy.get('#name');
    }

    emailInp() {
        return cy.get('#email');
    }

    promotionBtn() {
        return cy.get('#promotion');
    }

    submitBtn() {
        return cy.get('#submit-payment');
    }
}

module.exports = new paymentBox();