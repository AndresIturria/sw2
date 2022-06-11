var express = require('express');
const Qualifying = require("../models/qualifying");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Qualifying.find({}, {_id: 0}, function (err, qualifyings){
    res.json(qualifyings)
  });
});

module.exports = router;
