class registerUser {
    registerBtn() {
        return cy.get('.ico-register');
    }

    genderBtnInp() {
        return cy.get('#gender-female');
    }

    firstNameInp() {
        return cy.get('#FirstName');
    }

    lastNameInp() {
        return cy.get('#LastName');
    }

    birthDayInp() {
        return cy.get('[name="DateOfBirthDay"]');
    }

    birthMonthInp() {
        return cy.get('[name="DateOfBirthMonth"]');
    }

    birthYearInp() {
        return cy.get('[name="DateOfBirthYear"]');
    }

    emailInp() {
        return cy.get('#Email');
    }

    passwordInp() {
        return cy.get('#Password');
    }

    confirmPasswordInp() {
        return cy.get('#ConfirmPassword')
    }

    continueRegisterBtn() {
        return cy.get("#register-button");
    }

   
}


module.exports = new registerUser();