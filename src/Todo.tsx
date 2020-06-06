import React, { useEffect, useRef, useState } from "react";
import { TodoItem } from "./App";

type TodoProps = {
  todoItem: TodoItem;
  toggleCompleted: () => void;
  deleteTodoItem: () => void;
};

const Todo = ({ todoItem, toggleCompleted, deleteTodoItem }: TodoProps) => {
  const input = useRef<HTMLInputElement>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  useEffect(() => {
    if (isEditMode) {
      input?.current?.focus();
    }
  }, [isEditMode]);
  return (
    <li
      className={`${todoItem.completed ? "completed" : ""} ${
        isEditMode ? "editing" : ""
      }`.trim()}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todoItem.completed}
          onClick={toggleCompleted}
        />
        <label onDoubleClick={setIsEditMode.bind(null, true)}>
          {todoItem.text}
        </label>
        <button className="destroy" onClick={deleteTodoItem} />
      </div>
      <input className="edit" value={todoItem.text} ref={input} />
    </li>
  );
};

export default Todo;
