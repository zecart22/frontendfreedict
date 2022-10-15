context("Acess Dashboard", () => {
  it("Enters the login page", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
  });

  it("Tries to login to dashboard", () => {
    cy.viewport(1440, 900);

    cy.intercept("POST", "/register", {
      statusCode: 201,
      body: {
        name: "Ivan",
        email: "ivan22@mail.com",
      },
    }).as("new-user");

    cy.get("input[name=email]").type("ivan22@mail.com");
    cy.get("input[name=password]").type("aA@12345");
    cy.get("button[type=submit]").click();
  });
});
