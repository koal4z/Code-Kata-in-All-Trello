const fs = require("fs");
const http = require("http");
const port = process.argv[2] || 8000;
const server = http.createServer(function(req, res) {
  fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(port);
