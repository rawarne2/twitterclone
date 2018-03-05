const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

app.set('view engine', 'html');
app.engine("html", nunjucks.render);
nunjucks.configure("views", { noCache: true} );

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
    const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
    res.render( 'index', {title: 'Hall of Fame', people: people} );
})

app.listen(3000, () => console.log("Twitter.js listening on port 3000."))
