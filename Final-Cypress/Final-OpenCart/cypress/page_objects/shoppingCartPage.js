class cartPage {
    checkoutBtn() {
        return cy.get('.pull-right > .btn');
    }

    firstNameInp() {
        return cy.get('#input-payment-firstname');
    }

    lastNameInp() {
        return cy.get('#input-payment-lastname');
    }

    addressInp() {
        return cy.get('#input-payment-address-1');
    }

    cityInp() {
        return cy.get('#input-payment-city');
    }

    postCodeInp() {
        return cy.get('#input-payment-postcode');
    }

    countryInp() {
        return cy.get('#input-payment-country');
    }

    regionStateInp() {
        return cy.get('#input-payment-zone');
    }

    continueBtn() {
        return cy.get('#button-payment-address');
    }

    deliveryContinueBtn() {
        return cy.get('#button-shipping-address');
    }
    
    shippingContinueBtn() {
        return cy.get('#button-shipping-method');
    }

    termsAndConditionsBtn() {
        return cy.get('[type="checkbox"]');
    }

    paymentContinueBtn() {
        return cy.get('#button-payment-method');
    }
    
    confirmOrderBtn() {
        return cy.get('#button-confirm');
    }

}

module.exports = new cartPage();