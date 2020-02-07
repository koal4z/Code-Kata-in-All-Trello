const http = require("http");
var map = require("through2-map");
const port = process.argv[2] || 8000;

const server = http.createServer(function(req, res) {
  if (req.method === "POST") {
    req
      .pipe(
        map(function(chunk) {
          return chunk.toString().toUpperCase();
        })
      )
      .pipe(res);
  }
});

server.listen(port);
