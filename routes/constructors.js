var express = require('express');
const Constructor = require("../models/constructor");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Constructor.find({}, {_id: 0}, function (err, constructors){
    res.json(constructors)
  });
});

module.exports = router;
