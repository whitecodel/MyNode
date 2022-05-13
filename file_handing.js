var fs = require("fs");

function ondone(err) {
  if (err) throw err;
  console.log("Saved!");
}

fs.rename("mynewfile2.txt", "src/mynewfile2.txt", ondone);
