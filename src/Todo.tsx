import React, { useEffect, useRef, useState } from "react";
import { TodoItem } from "./App";

type TodoProps = {
  todoItem: TodoItem;
  toggleCompleted: () => void;
  updateTodoItem: (todoItem: TodoItem) => void;
  deleteTodoItem: () => void;
};

const Todo = ({
  todoItem,
  toggleCompleted,
  updateTodoItem,
  deleteTodoItem,
}: TodoProps) => {
  const input = useRef<HTMLInputElement>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedText, setEditedText] = useState(todoItem.text);
  const finishEditing = () => {
    setIsEditMode(false);
    updateTodoItem({ ...todoItem, text: editedText });
  };

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
      <input
        className="edit"
        value={editedText}
        ref={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEditedText(e.target.value)
        }
        onBlur={finishEditing}
      />
    </li>
  );
};

export default Todo;
