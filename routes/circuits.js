var express = require('express');
const Circuit = require("../models/circuit");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Circuit.find({}, {_id: 0}, function (err, circuits){
    res.json(circuits)
  });
});

module.exports = router;
