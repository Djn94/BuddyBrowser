const friendData = require("../app/data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });
    app.post("/api/friends", function (req, res) {

        friendData.push(req.body);
        res.json(true);
        console.log(friendData)
        const alreadyEntered = [];
        for (i = 0; i <= (friendData.length - 2); i++) {
            alreadyEntered.push(friendData[i].scores);
            console.log('HERE IS THE ALREADY ENTERED ARRAY BLOW')
            console.log(alreadyEntered);
            console.log('------------------------')
            const inputScore = req.body.scores;
            console.log(inputScore)
        }

    });
};


// for (i=0; i<=friendsArray.length, i++){
// 	for each (object in friends array)
// 	assign their score value to a user[x] variable 
// push variable to array for comparison

// for loop with multiple inputs?
// two arrays?
// [1 2 4 3 2 1 ]
// [3 2 4 1 5 1 ] 
// for for (i=0; i<=9, i++){
// user1[i]=currentvar2
// user2[i]=currentvar2

// >>>FIND DIFFERENCE OF user1[i] % user2[i]
// if difference = o{
// do nothing}
// else{
// differenceVariable+difference

// }
// return difference

