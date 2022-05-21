const express = require("express");
const app = express();
require("dotenv").config();
const { PORT } = process.env;
const routes = require("./routes");

app.use(express.json());

// making routes available to the app
routes(app);

const listenResult = () => console.log("Example app listening on port 3000!");

app.listen(PORT || 3000, listenResult);
