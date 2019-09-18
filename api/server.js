const express = require("express");

const server = express();

// routes
const authRoutes = require("../auth/authRoutes.js");
const userRoutes = require("../user/userRoutes.js");

server.use(express.json());

server.use("/api/auth", authRoutes);
server.use("/api/user", userRoutes);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API up..." });
});

module.exports = server;
