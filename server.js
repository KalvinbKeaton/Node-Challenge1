var express = require("express");
var app = new express();
var fs = require("fs");

const port = require("./port.json"); // Load the configuration file
const PORT = port.PORT;

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});

app.get("/home", (req, res) => {
  fs.readFile("./pages/home.html", (err, data) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    return res.end();
  });
});

app.get("/about", (req, res) => {
  fs.readFile("./pages/about.html", (err, data) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    return res.end();
  });
});

app.get("/contact", (req, res) => {
  fs.readFile("./pages/contact.html", (err, data) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    return res.end();
  });
});

app.get("/wompwomp", (req, res) => {
  res.writeHead(401);
  res.write("404, page not found :(");
  return res.end();
});

app.get("/", (req, res) => {
  fs.readFile("./pages/base.html", (err, data) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    return res.end();
  });
});
