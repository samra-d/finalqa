class paymentPage {
    paymentMethodBtn() {
        return cy.get('#paymentmethod_1');
    }

    paymentContinueBtn() {
        return cy.get('#payment-method-buttons-container > .button-1');
    }

    paymentNameInp() {
        return cy.get('#CardholderName');
    }

    paymentCardNumberInp() {
        return cy.get('#CardNumber');
    }

    paymentExpiryYearInp() {
        return cy.get("#ExpireYear");
    }

    paymentCardCodeInp() {
        return cy.get('#CardCode')
    }

    paymentNextBtn() {
        return cy.get('#payment-info-buttons-container > .button-1');
    }

    paymentConfirmBtn() {
        return cy.get('#confirm-order-buttons-container > .button-1')
    }

    
    

}

module.exports = new paymentPage();