class loginUser {
    loginBtn() {
        return cy.get('.ico-login')
    }

    emailLoginInp() {
        return cy.get('#Email')
    }

    passwordLoginInp() {
        return cy.get('#Password')
    }

    rememberMeBtn() {
        return cy.get('#RememberMe')
    }

    continueLoginBtn() {
        return cy.get('form > .buttons > .button-1')
    }
}

module.exports = new loginUser();