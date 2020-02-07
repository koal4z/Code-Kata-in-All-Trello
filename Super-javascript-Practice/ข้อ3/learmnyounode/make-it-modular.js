const mymodule = require("./mymodule");

const filePath = process.argv[2];
const extFile = process.argv[3];

let callback = (err, list) => {
  if (!err) {
    list.forEach(file => console.log(file));
  } else {
    throw err;
  }
};

mymodule(filePath, extFile, callback);
