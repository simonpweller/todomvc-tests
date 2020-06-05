import React from "react";
import { TodoItem } from "./App";

const Todo = (todoItem: TodoItem) => {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{todoItem.text}</label>
        <button className="destroy" />
      </div>
      <input className="edit" value={todoItem.text} />
    </li>
  );
};

export default Todo;
