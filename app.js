const express = require("express");
const authorRouter = require("./routes/authorRouter");
const indexRouter = require("./routes/indexRouter");
const bookRouter = require("./routes/bookRouter");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("views"));
app.use("/", indexRouter);
app.use("/authors", authorRouter);
app.use("/books", bookRouter);


app.get("/*", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile("404.html", { root: __dirname + '/views' }, function (err) {
    console.log(err);
    res.end();
  });
});


app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});


app.listen(8080, () => { console.log("Server listening on port 8080"); });