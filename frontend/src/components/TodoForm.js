import React, { useState } from "react";
import { addTodo } from "../api";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = await addTodo(text);
    onAdd(newTodo);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
