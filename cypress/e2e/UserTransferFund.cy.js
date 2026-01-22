describe("User Transfer Fund", () => {
  const username = `owis_${Date.now()}`;

  before(() => {
    cy.registerParaBank({
      firstName: "owis",
      lastName: "bukhari",
      username,
      password: "owis12345",
    });
    cy.logoutParaBank();
  });

  it("transfer funds", () => {
    cy.loginParaBank({ username, password: "owis12345" });

    cy.TransferFundsParaBank({
      amount: "100",
    });

    cy.logoutParaBank();
  });
});
