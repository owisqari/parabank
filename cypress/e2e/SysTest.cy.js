describe("SysTest", () => {
  const username = `owis_${Date.now()}`;

  it("register", () => {
    cy.registerParaBank({
      firstName: "owis",
      lastName: "bukhari",
      username,
      password: "owis12345",
    });
  });

  it("login", () => {
    cy.loginParaBank({ username, password: "owis12345" });
    cy.logoutParaBank();
  });

  it("transfer funds", () => {
    cy.loginParaBank({ username, password: "owis12345" });

    cy.TransferFundsParaBank({
      amount: "100",
    });

    cy.logoutParaBank();
  });

  it("loanRequest", () => {
    cy.loginParaBank({ username, password: "owis12345" });

    cy.loanRequest({
      amount: "5000",
      downPayment: "500",
    });
  });
});
