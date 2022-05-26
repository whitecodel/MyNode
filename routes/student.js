const router = require("express").Router();

router.get("/add", (req, res) => {
  res.send("Student Added");
});
router.get("/update", (req, res) => {
  res.send("Student Updated");
});
router.get("/read", (req, res) => {
  res.send("Student Retrived");
});
router.get("/delete", (req, res) => {
  res.send("Student Deleted");
});

module.exports = router;
