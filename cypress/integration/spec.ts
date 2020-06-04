describe(`No todos`, () => {
  it(`should hide #main and #footer if there are no todos`, () => {
    cy.visit("http://localhost:3000");
    cy.get(".main").should("be.hidden");
    cy.get(".footer").should("be.hidden");
  });
});
