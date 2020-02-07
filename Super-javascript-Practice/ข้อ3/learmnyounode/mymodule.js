const fs = require("fs");
const path = require("path");

module.exports = function(dirName, extFile, callBack) {
  fs.readdir(dirName, (err, list) => {
    if (err) {
      return callBack(err);
    } else {
      list = list.filter(file => {
        if (path.extname(file) === "." +extFile) {
          return true;
        }
      });
      return callBack(null, list);
    }
  });
};
