const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const routes = require("./routes");
const bodyParser = require("body-parser");
var socketio = require('socket.io');
// ...


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.set('view engine', 'html');
app.engine("html", nunjucks.render);
nunjucks.configure("views", { noCache: true} );

app.use((req, res, next) => {
  //console.log(Object.keys(req))
  console.log(req.method + " " + req.url);
  next();
})

app.use(express.static("public"));

var server = app.listen(3000, () => console.log("Twitter.js listening on port 3000."))
var io = socketio.listen(server);
app.use("/", routes(io));

// let tweetBank = require("./tweetBank");
// app.get("/tweets", (req, res, next) => {
//   res.render("index", )
//   next();
// })

// app.post("/tweets", (req, res, next) => {
//   res.send("POST /tweets request");
// });

// app.get("/news", (req, res, next) => {
//   res.send("Twitter news");
// })

// app.get("/", (req, res, next) => {
//     res.send("Under construction");
// })



