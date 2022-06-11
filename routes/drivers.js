var express = require('express');
var router = express.Router();
const Driver = require('../models/driver');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Driver.find({}, {_id: 0}, function (err, drivers){
    console.log(drivers)
    res.json(drivers)
  });
});

module.exports = router;
