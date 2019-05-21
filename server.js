const http = require('http');
const fs = require('fs');
const express = require("express");
const PORT = 8080;
const server = http.createServer(handleRequest);


function handleRequest(req, res) {
    const path = req.url;
    switch (path) {
        case "/":
            return displayIndex(path, req, res, res)
        case "/Datarecieved":
            return displayQuestions(path, req, res)
        default:
            return displayIndex(path, req, res)
    }
};
function displayIndex(url, req, res) {
    fs.readFile(__dirname + "/index.html", function (err, data) {
        res.writeHead(200, {
            "Content-Type": "text / html"
        });
        res.end(data);
    });
};
function displayQuestions(url, req, res) {
    var requestData = "";
    req.on("data", function (data) {
        requestData += data;
        console.log("You just posted some data to the server:\n", requestData);
        myHTML =
            "<html><head><title>yo dog!</title></head><body>" +
            "<h1>Thank you for the data: </h1><code>" +
            requestData +
            "</code>" +
            "</body></html>";
    });
    req.on("end", function () {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(myHTML);
    });
};

server.listen(PORT), function () {
    console.log('server listening on: http://localhost:' + PORT);
};