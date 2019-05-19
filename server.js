const path = require("path");
const http = require("http");

const express = require("express");
const PORT = 3000;
function handleRequest(request, response) {
    response.end('You good, path it ' + request.url);
}
const server1 = http.createServer(handleRequest);
server1.listen(PORT, function () {
    console.log("Server listening on http://localhost:" + PORT);
})