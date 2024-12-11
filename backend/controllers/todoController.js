const Todo = require("../models/todoModel");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    console.log(todos);

    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

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
