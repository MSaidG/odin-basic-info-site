const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200);
  res.send("Books Page");
});

router.get("/:id", (req, res) => { 
    res.status(200);
    res.send(`Book: ${req.params.id}`);
  });

module.exports = router;