const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];
const extFile = "." + process.argv[3];

const read = fs.readdir(filePath, function(err, data) {
  if (!err) {
    let files = data.filter(file => path.extname(file) === extFile);
    files.forEach(file => console.log(file));
  }
});
