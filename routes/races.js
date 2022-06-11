var express = require('express');
const Race = require("../models/race");
var router = express.Router();

//rutas tienen que ir de la más específica a la menos.

//getRaceById
router.get('/:raceId', function(req, res, next) {
  Race.find({raceId: req.params.raceId.toString()}, {_id: 0}, function (err, races){
    console.log(races)
    res.json(races)
  });
});

//getRaces
router.get('/', function(req, res, next) {
  Race.find({}, {_id: 0}, function (err, races){
    res.json(races)
  });
});

module.exports = router;
