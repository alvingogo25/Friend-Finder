var express = require('express');
var bodyParser = require("body-parser");
var friends = require('../data/friends.js');

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/api/friends", function (req, res) {
  res.send(friends);
});

router.post("/api/friends", function (req, res) {
  var user = req.body;
  console.log(user.scores);
  friends.push(user);
  var difference = 100;
  var match;
  for (var i = 0; i < friends.length; i++) {
    difference = compare(friends[i].scores, user.scores)
    if (compare(friends[i].scores, user.scores) < difference) {
      match = friends[i];
    }
  }
  console.log("match", match);
});

function compare(userScore, defaultScore){
  var totalDifference = 0
  for (var i = 0; i < userScore.length; i++) {
      totalDifference += Math.abs(defaultScore[i] - userScore[i]);
  }
  return totalDifference
};
// if totalDifference < difference, log match index to push data to client
module.exports = router;
