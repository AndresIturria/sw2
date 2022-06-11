var express = require('express');
const Race = require("../models/race");
var router = express.Router();

//rutas tienen que ir de la más específica a la menos.

//getRaceById
router.get('/id', function(req, res, next) {
  console.log("aqui")
  console.log(req.query.raceId)
  Race.find({raceId: req.query.raceId.toString()}, {_id: 0}, function (err, races){
    console.log(races)
    res.json(races)
  });
});

//getRaces
router.get('/', function(req, res, next) {
  console.log("aqui no")
  console.log(req.query.raceId)
  Race.find({}, {_id: 0}, function (err, races){
    res.json(races)
  });
});

module.exports = router;
