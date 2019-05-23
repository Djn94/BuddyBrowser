const http = require('http');
const fs = require('fs');
const express = require("express");
const PORT = process.env.PORT || 8080;
const server = http.createServer(handleRequest);
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
const friends = [{
    routeName: "JeffCash",
    name: "Jeff Cash",
    img: "here's an img url",
    scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}]



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