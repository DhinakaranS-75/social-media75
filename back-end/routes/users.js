const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hai User");
});
module.exports = router;
