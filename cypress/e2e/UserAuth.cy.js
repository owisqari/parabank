describe("User Registration and Login", () => {
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
});
