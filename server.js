const express = require("express");

const app = express();
app.use(express.json());

let todos = [];

app.get("/", (req, res) => {
  res.send("Todo Backend is running successfully!");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const todo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: false,
  };
  todos.push(todo);
  res.status(201).json(todo);
});

app.delete("/todos/:id", (req, res) => {
  todos = todos.filter((todo) => todo.id !== Number(req.params.id));
  res.json({ message: "Todo deleted successfully" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});