const router = require("express").Router();

router.get("/add", (req, res) => {
  res.send("Employee Added");
});
router.get("/update", (req, res) => {
  res.send("Employee Updated");
});
router.get("/read", (req, res) => {
  res.send("Employee Retrived");
});
router.get("/delete", (req, res) => {
  res.send("Employee Deleted");
});

module.exports = router;
