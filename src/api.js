const express = require("express");
var app = express();
const serverless = require("serverless-http");
app.get("/", function (request, response) {
  response.send("Hello World!");
});
app.listen(10000, function () {
  console.log("Started application on port %d", 10000);
});
