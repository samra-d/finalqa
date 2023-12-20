class productPage {

    desktopsBtn() {
        return cy.get('.nav > :nth-child(1) > .dropdown-toggle');
    }

    productBtn() {
        return cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > a');
    }

    addToCartBtn() {
        return cy.get('[onclick="addTocarts41();"]');
    }

    openCartBtn() {
        return cy.get(':nth-child(4) > a > .fa');
    }
}

module.exports = new productPage();