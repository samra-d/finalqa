class productPage {
    computerBtn() {
        return cy.get('.notmobile > :nth-child(1) > [href="/computers"]')
    }

    notebookBtn() {
        return cy.get(':nth-child(2) > .sub-category-item > .picture > a > img')
    }

    addToCartBtn() {
        return cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button')
    }

    closeBannerBtn() {
        return cy.get('.close')
    }

    openCartBtn() {
        return cy.get('#topcartlink')
    }

}

module.exports = new productPage();