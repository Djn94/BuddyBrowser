const path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));

    });
    app.get("/Questions.html", function (req, res) {
        res.sendFile(path.join(__dirname, "../Questions.html"));

    });
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../index.html"))
    });
}