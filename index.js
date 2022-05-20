const express = require("express");
const app = express();
require("dotenv").config();

console.log(process.env.PORT || 4000);

// app.use(express.json());

// app.get("/", (req, res) => {
//   console.log(req.body);
//   res.send("Hello World");
// });

// const listenResult = () => console.log("Example app listening on port 3000!");

// app.listen(3000, listenResult);
