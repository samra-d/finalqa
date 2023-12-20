class orderPage {
    myAccountBtn() {
        return cy.get(':nth-child(3) > [href="https://demo-opencart.com/index.php?route=account/account"]');
    }

    orderHistoryBtn() {
        return cy.get('#content > :nth-child(4) > :nth-child(1) > a');
    }

    continueBtn() {
        return cy.get('.pull-right > .btn');
    }
}

module.exports = new orderPage();