const express = require("express");
const User = require("./models/user");
const app = express();

const Sequlize = require("./database");

app.use(express.json());

const router = require("./routes/userRoutes");

app.use("/api/users", router);

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    meg: "Hello world",
  });
});

app.listen(5000);
