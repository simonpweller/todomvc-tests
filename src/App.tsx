import React, { ChangeEvent, useState } from "react";
import Todo from "./Todo";

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Array<TodoItem>>([]);
  const [todoText, setTodoText] = useState("");
  const [nextId, setNextId] = useState(1);

  const hasTodos = todos.length > 0;
  const addTodo = (text: string) => {
    setTodos([...todos, { id: nextId, text, completed: false }]);
    setTodoText("");
    setNextId(nextId + 1);
  };
  const toggleTodoStatus = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const toggleAll = () => {
    const allCompleted = todos.every((todo) => todo.completed);
    setTodos(todos.map((todo) => ({ ...todo, completed: !allCompleted })));
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
              e.key === "Enter" &&
              todoText.trim().length > 0 &&
              addTodo(todoText)
            }
            placeholder="What needs to be done?"
            autoFocus
          />
        </header>
        <section
          className="main"
          style={{ display: hasTodos ? "block" : "none" }}
        >
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onClick={toggleAll}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {todos.map((todoItem) => (
              <Todo
                key={todoItem.id}
                todoItem={todoItem}
                toggleCompleted={toggleTodoStatus.bind(null, todoItem.id)}
              />
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
