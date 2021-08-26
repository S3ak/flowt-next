/// <reference types="cypress" />

describe("Sign up", () => {
  beforeEach(() => {
    cy.visit("/sign-up");
  });

  it("Can be completed successfully", () => {
    const expectedFirstName = "John";
    const expectedLastName = "Smith";
    const expectedUserName = "mockUser13";
    const expectedMobileNumber = "0831234567";
    const expectedEmail = "bob@mail.com";
    const expectedPassword = "P@55W0rd!12345";

    cy.intercept("POST", "*/sign-up", {
      statusCode: 200,
      body: {
        data: {
          id: "12345",
        },
      },
    }).as("postForm");

    cy.get("form").should("exist");
    cy.get("input#fullName").type(`${expectedFirstName} ${expectedLastName}`);
    cy.get("input#userName").type(expectedUserName);
    cy.get("input#mobileNumber").type(expectedMobileNumber);
    cy.get("input#email").type(expectedEmail);
    cy.get("input#password").type(expectedPassword);
    cy.get("button[type=submit]").click();

    cy.wait("@postForm")
      .its("request.body")
      .should("include", expectedUserName);

    cy.contains("You've been registered").should("exist");
  });
});
