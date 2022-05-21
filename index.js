const express = require("express");
const app = express();
require("dotenv").config();
const { PORT } = process.env;

app.use(express.json());

app.use("/:id", (req, res) => {
  res.send(req.params);
});

const listenResult = () => console.log("Example app listening on port 3000!");

app.listen(PORT || 3000, listenResult);
