describe("Critical Path", () => {
  it("should be able to create posts and comments, and hype them", () => {
    cy.visit("http://localhost:3000");

    cy.get('input[placeholder="What\'s on your mind?"]').type("A test post.");
    cy.get("button").contains("Post").click();

    cy.get("[data-testid='username']").eq(0).contains("Zagreus");

    cy.get('input[placeholder="Add comment"]').type("Comment");
    cy.get("[data-testid='comment-button']").click();

    cy.get("[data-testid='username']").eq(1).contains("Zagreus");

    cy.get("[data-testid='hypes-button']").eq(0).click();
    cy.get("[data-testid='hypes-count']").eq(0).contains(" 1");

    cy.get("[data-testid='hypes-button']").eq(1).click().click();
    cy.get("[data-testid='hypes-count']").eq(1).contains(" 2");
  });
});
