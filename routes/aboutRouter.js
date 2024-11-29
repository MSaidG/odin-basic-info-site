const router = require("express").Router();

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

router.get("/", (req, res) => {
  res.render("about", { links: links });
});

module.exports = router;