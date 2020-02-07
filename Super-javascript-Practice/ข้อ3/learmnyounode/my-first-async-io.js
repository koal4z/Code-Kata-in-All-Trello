const fs = require("fs");

const read = fs.readFile(process.argv[2], function(err,data){
  if(!err){
    let str = data.toString()
    let split = str.split("\n")
    console.log(split.length-1)
  } 
})

