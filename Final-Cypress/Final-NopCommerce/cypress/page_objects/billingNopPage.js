class billingPage {
    billingCountryInp() {
        return cy.get('#BillingNewAddress_CountryId');
    }

    billingCityInp() {
        return cy.get('#BillingNewAddress_City');
    }

    billingAddressInp() {
        return cy.get('#BillingNewAddress_Address1');
    }

    billingZipCodeInp() {
        return cy.get('#BillingNewAddress_ZipPostalCode');
    }

    billingPhoneInp() {
        return cy.get('#BillingNewAddress_PhoneNumber');
    }

    billingContinueBtn() {
        return cy.get('#billing-buttons-container > .new-address-next-step-button');
    }
}

module.exports = new billingPage();