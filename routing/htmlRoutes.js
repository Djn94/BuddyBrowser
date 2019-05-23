const express = require("path");
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));

    });
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../Questions.html"));

    });
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../index.html"))
    });
}