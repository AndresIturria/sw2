var express = require('express');
const Race = require("../models/race");
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

router.put('/:raceId', async function (req, res, next) {
  const updateRace = await Race.findOne({raceId: req.params.raceId});
  updateRace.year = req.body.year;
  updateRace.round = req.body.round;
  updateRace.circuitId = req.body.circuitId;
  updateRace.name = req.body.name;
  updateRace.date = req.body.date;
  updateRace.time = req.body.time;
  updateRace.fp1_date = req.body.fp1_date;
  updateRace.fp1_time = req.body.fp1_time;
  updateRace.fp2_date = req.body.fp2_date;
  updateRace.fp2_time = req.body.fp2_time;
  updateRace.fp3_date = req.body.fp3_date;
  updateRace.fp3_time = req.body.fp3_time;
  updateRace.quali_date = req.body.quali_date;
  updateRace.quali_time = req.body.quali_time;

  updateRace.save()
  res.sendStatus(200)
});

module.exports = router;
