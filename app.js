const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("Welcome to twitter");
})

app.listen(3000, () => console.log("Twitter.js listening on port 3000."))
