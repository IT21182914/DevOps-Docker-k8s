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
    <div>
      <h1>To-Do App</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
