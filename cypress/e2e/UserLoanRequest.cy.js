describe("User Loan Request", () => {
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

  it("loan request", () => {
    cy.loginParaBank({ username, password: "owis12345" });

    cy.loanRequest({
      amount: "5000",
      downPayment: "500",
    });
    cy.logoutParaBank();
  });
});
