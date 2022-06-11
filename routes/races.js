var express = require('express');
const Race = require("../models/race");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Race.find({}, {_id: 0}, function (err, races){
    res.json(races)
  });
});
module.exports = router;
