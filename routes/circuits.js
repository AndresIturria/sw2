var express = require('express');
const Circuit = require("../models/circuit");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Circuit.find({}, {_id: 0}, function (err, circuits){
    res.json(circuits);
  });
});

router.get('/:circuitId', function(req, res, next) {
  Circuit.find({circuitId: req.params.circuitId}, {_id: 0}, function (err, circuits){
    res.json(circuits);
  });
});

router.post('/', function(req, res, next) {
  Circuit.findOne().sort({circuitId: -1}).exec(function (err, result){
    if (err){
      res.render('error.njk');
    }
    let circuitId = result.circuitId + 1;
    const newCircuit = new Circuit();
    newCircuit.circuitId = circuitId;
    newCircuit.circuitRef = req.body.circuitRef;
    newCircuit.name = req.body.name;
    newCircuit.location = req.body.location;
    newCircuit.country = req.body.country;
    newCircuit.save();
    res.send(circuitId.toString());

  });
});

router.put('/:circuitId', async function (req, res, next) {
  const updateCircuit = await Circuit.findOne({circuitId: req.params.circuitId});
  updateCircuit.circuitRef = req.body.circuitRef;
  updateCircuit.name = req.body.name;
  updateCircuit.location = req.body.location;
  updateCircuit.country = req.body.country;
  updateCircuit.save();
  res.sendStatus(200);
});
module.exports = router;
