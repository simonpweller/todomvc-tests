describe(`No todos`, () => {
  it(`should hide #main and #footer if there are no todos`, () => {
    cy.visit("http://localhost:3000");
    cy.get(".main").should("be.hidden");
    cy.get(".footer").should("be.hidden");
  });
});

describe(`New todo`, () => {
  it(`should focus the input element when the page is loaded`, () => {
    cy.get(".new-todo").should("have.focus");
  });
  it(`should create the todo, append it to the todo list, and clear the input when enter is pressed`, () => {});
  it(`should not create a todo if the text is empty after trimming`, () => {});
});
