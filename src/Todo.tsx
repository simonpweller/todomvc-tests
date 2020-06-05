import React from "react";
import { TodoItem } from "./App";

type TodoProps = {
  todoItem: TodoItem;
  toggleCompleted: () => void;
};

const Todo = ({ todoItem, toggleCompleted }: TodoProps) => {
  return (
    <li className={todoItem.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todoItem.completed}
          onClick={toggleCompleted}
        />
        <label>{todoItem.text}</label>
        <button className="destroy" />
      </div>
      <input className="edit" value={todoItem.text} />
    </li>
  );
};

export default Todo;
