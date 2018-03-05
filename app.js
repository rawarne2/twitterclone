const express = require("express");
const app = express();

app.use((req, res, next) => {
  //console.log(Object.keys(req))
  console.log(req.method + " " + req.url);
  next();
})

app.use("/special*", (req, res, next) => {
  console.log("You reached the special area.");
  next();
})

app.get("/news", (req, res, next) => {
  res.send("Twitter news");
})

app.get("/", (req, res, next) => {
  res.send("Welcome to twitter");
})

app.listen(3000, () => console.log("Twitter.js listening on port 3000."))
