var express = require('express');

var router = express.Router();

router.get("/api/friends", function (req, res) {
  console.log("get request");
});

router.post("/api/frieneds", function (req, res) {
  console.log("post request");
});

module.exports = router;
