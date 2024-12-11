const Todo = require("../models/todoModel");

// Get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    console.log(todos);

    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      text: req.body.text,
    });
    await newTodo.save();
    res.json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
