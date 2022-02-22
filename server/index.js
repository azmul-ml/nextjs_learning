const express = require('express')
const users = require('./db');

const app = express();

app.get("/api/users", (req, res) => {
   res.json(users);
})

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id)
  res.json(user);
})

app.listen(3004, () => {
  console.log("Server Running")
})