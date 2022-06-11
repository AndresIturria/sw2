var express = require('express');
const Qualifying = require("../models/qualifying");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Qualifying.find({}, {_id: 0}, function (err, qualifyings){
    res.json(qualifyings)
  });
});

router.get('/:qualifyId', function(req, res, next) {
  Qualifying.find({qualifyId: req.params.qualifyId}, {_id: 0}, function (err, qualifyings){
    res.json(qualifyings);
  });
});

router.post('/', function(req, res, next) {
  Qualifying.findOne().sort({qualifyId: -1}).exec(function (err, result){
    if (err){
      res.render('error.njk');
    }
    let qualifyId = result.qualifyId + 1;
    const newQualifying = new Qualifying();
    newQualifying.qualifyId = qualifyId;
    newQualifying.raceId = req.body.raceId;
    newQualifying.driverId = req.body.driverId;
    newQualifying.constructorId = req.body.constructorId;
    newQualifying.number = req.body.number;
    newQualifying.position = req.body.position;
    newQualifying.q1 = req.body.q1;
    newQualifying.q2 = req.body.q2;
    newQualifying.q3 = req.body.q3;
    newQualifying.save();
    res.send(qualifyId.toString());

  });
});

router.put('/:qualifyId', async function (req, res, next) {
  const updateQualifying = await Qualifying.findOne({qualifyId: req.params.qualifyId});
  updateQualifying.raceId = req.body.raceId;
  updateQualifying.driverId = req.body.driverId;
  updateQualifying.constructorId = req.body.constructorId;
  updateQualifying.number = req.body.number;
  updateQualifying.position = req.body.position;
  updateQualifying.q1 = req.body.q1;
  updateQualifying.q2 = req.body.q2;
  updateQualifying.q3 = req.body.q3;
  updateQualifying.save();
  res.sendStatus(200);
});

module.exports = router;
