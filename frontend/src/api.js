const API_URL = process.env.REACT_APP_API_URL;

console.log("Environment Variables:", process.env);
console.log("API_URL:", API_URL);

export const fetchTodos = async () => {
  const response = await fetch(`${API_URL}/todos`);
  return response.json();
};

export const addTodo = async (text) => {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return response.json();
};
