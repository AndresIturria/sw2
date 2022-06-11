var express = require('express');
const Constructor = require("../models/constructor");
var router = express.Router();
var xml2js = require('xml2js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Constructor.find({}, {_id: 0}, function (err, constructors){
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(constructors);
    res.send(xml)
  });
});

module.exports = router;
