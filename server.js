const http = require("http");

const headers = { "Content-Type": "text/html" };

function server(req, res) {
  const url = req.url;

  switch (url) {
    case "/":
      res.writeHead(200, headers);
      res.end("home page");
      break;
    case "/about":
      res.writeHead(200, headers);
      res.end("about page");
    default:
      res.writeHead(404, headers);
      res.end("Not Found");
  }
}

http.createServer(server).listen(8080);
