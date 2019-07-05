const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 8000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("Welcome to your server! Pretty easy stuff");
});

server.listen(port, () => {
  console.log(`Listeing on port ${port}`);
});
