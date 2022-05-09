const http = require("http");

const headers = { "Content-Type": "text/html" };

function server(req, res) {
  res.writeHead(500, headers);
  res.end("Hello World! I am a server!");
}

http.createServer(server).listen(8080);
