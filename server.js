const http = require('http');
const fs = require('fs');
const express = require("express");
const PORT = 8080;
const server = http.createServer(handleRequest);

server.listen(PORT), function () {
    console.log('server listening on: http://localhost:' + PORT);
};
function handleRequest(req, res) {
    const path = req.url;
    switch (path) {
        case "/":
            return displayIndex(path, req, res, res)
        case "/FavFoods":
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
    fs.readFile(__dirname + "/Questions.html", function (err, data) {
        res.writeHead(200, {
            "Content-Type": "text / html"
        });
        res.end(data);
    });
};