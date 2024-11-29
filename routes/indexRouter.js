const router = require("express").Router();
const path = __dirname.substring(0, __dirname.length - 7);

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];
const users = ["Rose", "Cake", "Biff"];

router.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

router.get("/contact-me", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile("contact-me.html", { root: path + '/views' }, function (err) {
    console.log(err);
    res.end();
  });
});

module.exports = router;