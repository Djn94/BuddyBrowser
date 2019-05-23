const friendData = require("../app/data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });
    app.post("/api/friends", function (req, res) {
        console.log('heres the req)')
        console.log(req);
        console.log(req.body);
        console.log(friendData);
        friendData.push("");
        res.json(true);
    });
};


