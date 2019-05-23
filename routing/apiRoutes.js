const friendData = require("../app/data/friends.js");
const express = require("express");
const app = express();
console.log('below this is the array')
console.log(friendData)
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        console.log(friendData.friendArray)
        res.json(friendData);
    });
    app.post("/api/friends", function (req, res) {

        friendData.push(req.body);
    });


};
