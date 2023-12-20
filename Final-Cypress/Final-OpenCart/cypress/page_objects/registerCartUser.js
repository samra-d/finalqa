class registerUser {
    myAccountBtn() {
        return cy.get('.list-inline > .dropdown > .dropdown-toggle');
    }

    registerUserBtn() {
        return cy.get('.dropdown-menu > :nth-child(1) > a');
    }

    firstNameInp() {
        return cy.get('#input-firstname');
    }

    lastNameInp() {
        return cy.get('#input-lastname');
    }

    emailInp() {
        return cy.get('#input-email');
    }

    telephoneInp() {
        return cy.get('#input-telephone');
    }

    passwordInp() {
        return cy.get('#input-password');
    }

    passwordConfirmInp() {
        return cy.get('#input-confirm');
    }

    subscribeBtn() {
        return cy.get('.col-sm-10 > :nth-child(2) > input');
    }

    privacyPolicyBtn() {
        return cy.get('[type="checkbox"]');
    }

    continueBtn() {
        return cy.get('.pull-right > .btn');
    }

    


}

module.exports = new registerUser();