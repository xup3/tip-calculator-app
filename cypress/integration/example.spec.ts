describe("Mobile testing", () => {
  beforeEach(() => {
    cy.log("I run before every test in every spec file!!!!!!");
    // cy.viewport(550, 750); // Set viewport to 550px x 750px
    cy.viewport("iphone-6"); // Set viewport to 375px x 667px
    cy.visit("/");
  });

  it("visits the app root url", () => {
    cy.contains("[data-cy=headline]", "You did it!");
  });

  it("should have a button called reset", () => {
    cy.contains("button", "RESET");
  });

  it("fixture should've been called", () => {
    cy.fixture("example").then((body) => console.log(body));
  });
});

describe("Desktop testing", () => {
  beforeEach(() => {
    cy.log("I run before every test in every spec file!!!!!!");
    cy.viewport(1920, 1080); // Set viewport to 550px x 750px
    // cy.viewport("macbook-15");
  });

  it("visits the app root url", () => {
    cy.contains("[data-cy=headline]", "You did it!");
  });

  it("checks the first checkbox", () => {
    cy.get("[data-cy=perc_5]").check();
  });

  it("should have a button called reset", () => {
    cy.contains("button", "RESET");
  });

  it("fixture should've been called", () => {
    cy.fixture("example").then((body) => console.log(body));
  });

  it("clicks the reset button", () => {
    cy.get("[data-cy=reset]").click();
    cy.log("form reset");
  });
});
