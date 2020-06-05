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
    cy.get(".toggle").should("not.be.checked");
    cy.get("li").first().should("not.have.class", "completed");

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

describe(`Marking todos as completed`, () => {
  describe(`clicking the checkbox of an item`, () => {
    it(`should mark the todo as complete by updating its completed value and toggling the class completed on its parent <li>`, () => {
      cy.get(".toggle").click();
      cy.get(".toggle").should("be.checked");
      cy.get("li").first().should("have.class", "completed");
    });

    it(`should mark the todo as not completed when it's clicked a second time`, () => {
      cy.get(".toggle").click();
      cy.get(".toggle").should("not.be.checked");
      cy.get("li").first().should("not.have.class", "completed");
    });
  });

  describe(`clicking the mark all as complete checkbox`, () => {
    before(() => {
      cy.get(".new-todo").type("Learn React").type("{enter}");
    });

    it(`it should mark all items as completed`, () => {
      cy.get(".toggle-all").click();
      cy.get(".toggle").should("be.checked");
    });

    it(`should mark all items as not completed if they were all completed before`, () => {
      cy.get(".toggle-all").click();
      cy.get(".toggle").should("not.be.checked");
    });

    it(`should update as individual items are marked as completed`, () => {
      cy.get(".toggle-all").should("not.be.checked");
      cy.get(".toggle").first().click();
      cy.get(".toggle-all").should("not.be.checked");
      cy.get(".toggle").eq(1).click();
      cy.get(".toggle-all").should("be.checked");
    });

    describe(`when some items were marked as completed, but not others`, () => {
      before(() => {
        cy.get(".toggle").first().click();
        cy.get(".toggle-all").should("not.be.checked");
      });
      it(`should mark all items as completed`, () => {
        cy.get(".toggle-all").click();
        cy.get(".toggle").should("be.checked");
      });
    });
  });
});
