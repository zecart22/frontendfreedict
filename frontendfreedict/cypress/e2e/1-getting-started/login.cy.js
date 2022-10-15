context("Login", () => {
  it("Enters the login page and tries to go to the register page", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.contains("Clique aqui para se cadastrar").click();
  });

  it("Tries to register a new user", () => {
    cy.viewport(1440, 900);

    cy.intercept("POST", "/register", {
      statusCode: 201,
      body: {
        name: "Ivan",
        email: "ivan@mail.com",
        id: 1,
      },
    }).as("new-user");

    cy.get("input[name=name]").type("Ivan");
    cy.get("input[name=email]").type("ivan22@mail.com");
    cy.get("input[name=password]").type("aA@12345");
    cy.get("button[type=submit]").click();

    cy.contains("Login");
  });

  it("Tries to login a new user", () => {
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

    cy.contains("");
  });
});
