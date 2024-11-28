const router = require("express").Router();
const bookRouter = router;

bookRouter.get("/", (req, res) => {
  res.status(200);
  res.send("Books Page");
});

bookRouter.get("/:id", (req, res) => { 
    res.status(200);
    res.send(`Book: ${req.params.id}`);
  });

module.exports = bookRouter;