import React from "react";

const TodoList = ({ todos }) => {
  return (
    <ul className="mt-6 space-y-4 max-w-xl mx-auto">
      {todos.map((todo) => (
        <li
          key={todo._id}
          className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition hover:-translate-y-1"
        >
          <span className="text-gray-800 truncate">{todo.text}</span>
          <button
            className="text-red-500 hover:text-red-700 focus:outline-none focus:ring focus:ring-red-300 rounded-full p-2"
            onClick={() => alert("Delete functionality coming soon!")}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
