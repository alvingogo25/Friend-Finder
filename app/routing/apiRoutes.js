var express = require('express');
var bodyParser = require("body-parser");
var friends = require('../data/friends.js');

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/api/friends", function (req, res) {
  res.send(friends);
});

router.post("/api/friends", function (req, res) {
  console.log("post request", req.body);
});

module.exports = router;
