const express = require("express");
const app = express();

app.use(express.static("views"));

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});

app.get("/", (req, res) => {
  res.status(200);
  res.setHeader("Content-Type", "text/html");
  res.sendFile("index.html", { root: __dirname + '/views' }, function (err) {
    console.log(err);
    res.end();
  });
});

app.get("/about", (req, res) => {
  res.status(200);
  res.setHeader("Content-Type", "text/html");
  res.sendFile("about.html", { root: __dirname + '/views' }, function (err) {
    console.log(err);
    res.end();
  });
});

app.get("/contact-me", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile("contact-me.html", { root: __dirname + '/views' }, function (err) {
    console.log(err);
    res.end();
  });
});

app.get("/*", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile("404.html", { root: __dirname + '/views' }, function (err) {
    console.log(err);
    res.end();
  });
});
