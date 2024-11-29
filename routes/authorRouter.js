const router = require("express").Router();
const { getAuthorById } = require("../controllers/authorController");

router.get("/", (req, res) => {
  res.status(200);
  res.send("Authors Page");
});

router.get("/:id", getAuthorById);

module.exports = router;