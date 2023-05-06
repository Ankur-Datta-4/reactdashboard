const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { users, orders, sales } = require("./data");

const app = express();

// MIDDLEWARE------------------------------------------------------

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// ROUTES----------------------------------------------------------
app.get("/api/users", (req, res) => {
  return res.status(200).json({ users: users });
});

// search users by tag
app.get("/api/users/search", (req, res) => {
  const { tag } = req.query;
  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(tag.toLowerCase());
  });

  return res.status(200).json({ users: filteredUsers });
});

// get user by id
app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }

  return res.status(200).json({ user, userOrder: orders[id] });
});

// get user sales by id
app.get("/api/users/:id/sales", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }

  return res.status(200).json({ sales: sales[id] });
});

// error route
app.use("*", (req, res) => {
  return res.status(404).json({ error: "not found" });
});

const PORT = process.env.PORT || 5005;
// listen
app.listen(PORT, () => console.log("🚀 server started on port " + PORT));
