var express = require('express');
const Race = require("../models/race");
const Constructor = require("../models/constructor");
var router = express.Router();

//getRaces
router.get('/', function(req, res, next) {
  Race.find({}, {_id: 0}, function (err, races){
    res.json(races)
  });
});

//getRaceById
router.get('/:raceId', function(req, res, next) {
  Race.find({raceId: req.params.raceId}, {_id: 0}, function (err, races){
    console.log(races)
    res.json(races)
  });
});

router.post('/', function(req, res, next) {
  Race.findOne().sort({raceId: -1}).exec(function (err, result){
    if (err){
      res.render('error.njk')
    }
    let raceId = result.raceId + 1;
    const newRace = new Race();
    newRace.raceId = raceId;
    newRace.year = req.body.year;
    newRace.round = req.body.round;
    newRace.circuitId = req.body.circuitId;
    newRace.name = req.body.name;
    newRace.date = req.body.date;
    newRace.time = req.body.time;
    newRace.fp1_date = req.body.fp1_date;
    newRace.fp1_time = req.body.fp1_time;
    newRace.fp2_date = req.body.fp2_date;
    newRace.fp2_time = req.body.fp2_time;
    newRace.fp3_date = req.body.fp3_date;
    newRace.fp3_time = req.body.fp3_time;
    newRace.quali_date = req.body.quali_date;
    newRace.quali_time = req.body.quali_time;

    newRace.save()
    res.send(raceId.toString())

  });
});

module.exports = router;
