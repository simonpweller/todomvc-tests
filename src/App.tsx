import React, { ChangeEvent, useState } from "react";
import Todo from "./Todo";

export type TodoItem = {
  text: string;
};

function App() {
  const [todos, setTodos] = useState<Array<TodoItem>>([]);
  const [todoText, setTodoText] = useState("");

  const hasTodos = todos.length > 0;
  const addTodo = (text: string) => {
    setTodos([...todos, { text }]);
    setTodoText("");
  };

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            value={todoText}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTodoText(e.target.value)
            }
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
              e.key === "Enter" && addTodo(todoText)
            }
            placeholder="What needs to be done?"
            autoFocus
          />
        </header>
        <section
          className="main"
          style={{ display: hasTodos ? "block" : "none" }}
        >
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {todos.map((todoItem) => (
              <Todo {...todoItem} />
            ))}
          </ul>
        </section>
        <footer
          className="footer"
          style={{ display: hasTodos ? "block" : "none" }}
        >
          <span className="todo-count">
            <strong>0</strong> item left
          </span>
          <ul className="filters">
            <li>
              <a className="selected" href="#/">
                All
              </a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>
          Template by <a href="http://sindresorhus.com">Sindre Sorhus</a>
        </p>
        <p>
          Created by <a href="https://www.sweller.de">Simon Weller</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default App;
