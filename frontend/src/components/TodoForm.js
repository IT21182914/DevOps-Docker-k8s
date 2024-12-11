import React, { useState } from "react";
import { addTodo } from "../api";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    const newTodo = await addTodo(text);
    onAdd(newTodo);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow-md max-w-xl mx-auto"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        className="flex-grow w-full px-4 py-2 text-gray-800 bg-gray-50 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
