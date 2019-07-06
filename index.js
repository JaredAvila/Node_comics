const http = require("http");
const fs = require("fs");
const url = require("url");

// Templates

const homeTemp = fs.readFileSync(
  `${__dirname}/templates/home-template.html`,
  "utf-8"
);

const port = 8000;

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200, {
      "Content-type": "text/html"
    });
    res.end(homeTemp);
  } else if (req.url === "/comic") {
    res.writeHead(200, {
      "Content-type": "text/html"
    });
    res.end("Comic page");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html"
    });
    res.end("<h1>Page not found</h1><br /><a href='/'>Back to home</a>");
  }
});

server.listen(port, () => {
  console.log(`Listeing on port ${port}`);
});
