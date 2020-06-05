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

  it(`should create the todo, append it to the todo list, and clear the input when enter is pressed`, () => {
    cy.get(".new-todo").type("Learn javascript").type("{enter}");
    cy.get(".todo-list").find("li").should("have.length", 1);
    cy.get(".todo-list")
      .find("li")
      .first()
      .should("contain", "Learn javascript");
    cy.get(".new-todo").should("have.value", "");
    cy.get(".main").should("be.visible");
    cy.get(".footer").should("be.visible");
  });

  it(`should not create a todo if the text is empty after trimming`, () => {
    cy.get(".todo-list")
      .find("li")
      .then(($todos) => {
        const todoCount = $todos.length;

        cy.get(".new-todo").type("{enter}");
        cy.get(".todo-list").find("li").should("have.length", todoCount);
        cy.get(".new-todo").type("  ").type("{enter}");
        cy.get(".todo-list").find("li").should("have.length", todoCount);
      });
  });
});
