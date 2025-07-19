const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Page working fine");
});

const userName = "Admin";
const password = "Welcome123";

app.post("/login", function (req, res) {
  const { username, password: pwd } = req.body;
  console.log(req);
  console.log("username", username);
  console.log("password", password);

  if (username == userName && pwd == password) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.listen(3000, function () {
  console.log("Server Started on http://localhost:3000/");
});
