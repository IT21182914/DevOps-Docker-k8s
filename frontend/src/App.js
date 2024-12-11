import React, { useState, useEffect } from "react";
import { fetchTodos } from "./api";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      const todos = await fetchTodos();
      setTodos(todos);
    };
    loadTodos();
  }, []);

  const handleAdd = (newTodo) => setTodos([...todos, newTodo]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
          To-Do App
        </h1>
        <TodoForm onAdd={handleAdd} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default App;
