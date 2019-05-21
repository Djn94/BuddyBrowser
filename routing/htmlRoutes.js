const express = require("express");
const PORT = 8080;
function displayIndex(url, req, res) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "index.html"));

    });
}
function displayQuestions(url, req, res) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "Questions.html"));

    });
}

function handleRequest(req, res) {
    const path = req.url;
    switch (path) {

        case "/Survey":
            return displayQuestions(path, req, res)
        default:
            return displayIndex(path, req, res)
    }
};