const net = require("net");
const strftime = require("strftime");
const port = process.argv[2] || 8000;

let date = strftime("%Y-%m-%d %H:%M").toString();
const server = net.createServer(function(socket) {
  socket.write(date);
  socket.end("\n");
});

server.listen(port);
