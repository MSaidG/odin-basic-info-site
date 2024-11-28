const router = require("express").Router();
const { getAuthorById } = require("../controllers/authorController");
const authorRouter = router;

authorRouter.get("/", (req, res) => {
  res.status(200);
  res.send("Authors Page");
});

authorRouter.get("/:id", getAuthorById);

module.exports = authorRouter;