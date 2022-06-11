var express = require('express');
var router = express.Router();
const Driver = require('../models/driver');
const Driver = require("../models/driver");

/* GET users listing. */
router.get('/', function(req, res, next) {
  Driver.find({}, {_id: 0}, function (err, drivers){
    res.json(drivers)
  });
});

router.get('/:driverId', function(req, res, next) {
  Driver.find({driverId: req.params.driverId}, {_id: 0}, function (err, drivers){
    res.json(drivers);
  });
});

router.post('/', function(req, res, next) {
  Driver.findOne().sort({driverId: -1}).exec(function (err, result){
    if (err){
      res.render('error.njk');
    }
    let driverId = result.driverId + 1;
    const newDriver = new Driver();
    newDriver.driverId = driverId;
    newDriver.driverRef = req.body.driverRef;
    newDriver.number = req.body.number;
    newDriver.code = req.body.code;
    newDriver.forename = req.body.forename;
    newDriver.surname = req.body.surname;
    newDriver.dob = req.body.dob;
    newDriver.nationality = req.body.nationality
    newDriver.save();
    res.send(driverId.toString());

  });
});

router.put('/:driverId', async function (req, res, next) {
  const updateDriver = await driver.findOne({driverId: req.params.driverId});
  updateDriver.driverRef = req.body.driverRef;
  updateDriver.number = req.body.number;
  updateDriver.code = req.body.code;
  updateDriver.forename = req.body.forename;
  updateDriver.surname = req.body.surname;
  updateDriver.dob = req.body.dob;
  updateDriver.nationality = req.body.nationality
  updateDriver.save();
  res.sendStatus(200);
});

module.exports = router;
