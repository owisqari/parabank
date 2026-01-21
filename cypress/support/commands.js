// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add(
  "registerParaBank",
  ({ firstName, lastName, username, password }) => {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");

    cy.get('[name="customer.firstName"]').clear().type(firstName);
    cy.get('[name="customer.lastName"]').clear().type(lastName);

    cy.get('[name="customer.address.street"]').type("riyadh an narjis");
    cy.get('[name="customer.address.city"]').type("riyadh");
    cy.get('[name="customer.address.state"]').type("RIY");
    cy.get('[name="customer.address.zipCode"]').type("133339");
    cy.get('[name="customer.phoneNumber"]').type("500000000");
    cy.get('[name="customer.ssn"]').type("123456789");

    cy.get('[name="customer.username"]').clear().type(username);
    cy.get('[name="customer.password"]').clear().type(password);
    cy.get('[name="repeatedPassword"]').clear().type(password);

    cy.get('input[value="Register"]').click();

    // ✅ Assertion
    cy.contains("Your account was created successfully").should("be.visible");
  },
);

Cypress.Commands.add("loginParaBank", ({ username, password }) => {
  cy.visit("https://parabank.parasoft.com/parabank/index.htm");

  cy.get('input[name="username"]').clear().type(username);
  cy.get('input[name="password"]').clear().type(password);

  cy.get('input[value="Log In"]').click();
  cy.url().should("include", "overview.htm");
});

Cypress.Commands.add("logoutParaBank", () => {
  cy.get('a[href*="logout.htm"]').click();
  cy.url().should("include", "index.htm");
});

Cypress.Commands.add("TransferFundsParaBank", ({ amount }) => {
  cy.visit("https://parabank.parasoft.com/parabank/transfer.htm");

  cy.get('[name="input"]').clear().type(amount);

  cy.get(":nth-child(4) > .button").click();
});

Cypress.Commands.add("loanRequest", ({ amount, downPayment }) => {
  cy.get("#leftPanel > ul > :nth-child(7) > a").click();
  cy.get("#amount").clear().type(amount);
  cy.get("#downPayment").clear().type(downPayment);
  cy.get('[colspan="2"] > .button').click();
});
