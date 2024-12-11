const express = require("express");
const { getTodos, createTodo } = require("../controllers/todoController");

const router = express.Router();

router.get("/todos", getTodos);
router.post("/todos", createTodo);

module.exports = router;
