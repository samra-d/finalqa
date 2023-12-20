import registerNopUser from "../page_objects/registerNopUser";
import loginNopUser from "../page_objects/loginNopUser";
import billingNopPage from "../page_objects/billingNopPage";
import paymentNopPage from "../page_objects/paymentNopPage";


Cypress.Commands.add('visitNopCommerce', () => {
    cy.visit('https://demo.nopcommerce.com/')
})

Cypress.Commands.add("textCheck", (selector, text) => {
    selector.should("have.text", text);
  });

  Cypress.Commands.add("registerForm", () => {
    cy.fixture("data").then((data) => {
      registerNopUser.genderBtnInp().click();
      cy.get("@userFirstName").then((firstName) => {
        registerNopUser.firstNameInp().type(firstName);
      });
      cy.get("@userLastName").then((lastName) => {
        registerNopUser.lastNameInp().type(lastName);
      });
  
      registerNopUser.birthDayInp().select(data.birthDay);
      registerNopUser.birthMonthInp().select(data.birthMonth);
      registerNopUser.birthYearInp().select(data.birthYear);
      cy.get("@userEmail").then((email) => {
        registerNopUser.emailInp().type(email);
      });
  
      registerNopUser.passwordInp().type(data.password);
      registerNopUser.confirmPasswordInp().type(data.password);
    });
  });

  Cypress.Commands.add("loginForm", () => {
    cy.fixture("data").then((data) => {
      loginNopUser.loginBtn().click();
      cy.get("@userEmail").then((email) => {
        loginNopUser.emailLoginInp().type(email);
      });
      loginNopUser.passwordLoginInp().type(data.password);
      loginNopUser.rememberMeBtn().click();
      loginNopUser.continueLoginBtn().click();
    });
  });

  Cypress.Commands.add("billingForm", () => {
    cy.fixture("data").then((data) => {
        billingNopPage.billingCountryInp().select(data.country);
        billingNopPage.billingCityInp().type(data.city);
        billingNopPage.billingAddressInp().type(data.address);
        billingNopPage.billingZipCodeInp().type(data.zipCode);
        billingNopPage.billingPhoneInp().type(data.phone);
        billingNopPage.billingContinueBtn().click();

    })
  })


  Cypress.Commands.add("paymentForm", () => {
    cy.fixture("data").then((data) => {
        cy.get("@userFirstName").then((firstName) => {
            paymentNopPage.paymentNameInp().type(firstName);
        })

    paymentNopPage.paymentCardNumberInp().type(data.cardNumber);
    paymentNopPage.paymentExpiryYearInp().select(data.expiryDate);
    paymentNopPage.paymentCardCodeInp().type(data.cardCode);
    paymentNopPage.paymentNextBtn().click();
    })
  })

  
  
  
