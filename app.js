const http = require("http");

const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This always runs!");
  next();
});

app.use("/product", (req, res, next) => {
  console.log("in the another middleware");
  res.send("<h1>The add product page!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("in the another middleware");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
