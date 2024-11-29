const express = require("express");
const authorRouter = require("./routes/authorRouter");
const indexRouter = require("./routes/indexRouter");
const bookRouter = require("./routes/bookRouter");
const aboutRouter = require("./routes/aboutRouter");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});


app.listen(8080, () => { console.log("Server listening on port 8080"); });