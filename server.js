const path = require("path");
const http = require("http");
const fs = require("fs");
const express = require("express");
const PORT = 8015
function displayIndex(url, req, res) {
    fs.readFile(__dirname + "/index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(data);
    }
    )
}

const server1 = http.createServer(handleRequest);
server1.listen(PORT, function () {
    console.log("Server listening on http://localhost:" + PORT);
})

function handleRequest(request, response) {
    var path = req.url;
    displayIndex();
    // switch (path) {

    // case "/":
    //     return displayIndex(path, req, res);

    // case "/portfolio":
    //     return displayQuestions(path, req, res);

    //     default:
    //         return display404(path, req, res);
    // }
}