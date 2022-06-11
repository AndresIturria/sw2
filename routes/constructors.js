var express = require('express');
const Constructor = require("../models/constructor");
var router = express.Router();
var validator = require('xsd-schema-validator');

function json_to_xml(input){
  let xml = "";

  const prefixXML = `<?xml version="1.0" encoding="UTF-8"?>\n<constructors>\n`;
  const suffixXML = "\n</constructors>";

  const keys = ["constructorId", "constructorRef", "name", "nationality"]

  input.forEach((constructor) => {
    let valueXML = keys
        .map((key) => {
          return `<${key}>${constructor[key]}</${key}>`;
        })
        .join("\n\t");
    xml += `
    <constructor>
      ${valueXML}
    </constructor>
  `;
  });

  const final = prefixXML + xml + suffixXML;

  return(final);
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  Constructor.find({}, {_id: 0}, function (err, constructors){
    xml = json_to_xml(constructors)
    validator.validateXML(xml, '../schemas/constructors.xsd', function(err, result) {
      if (err) {
        res.render('error.njk');
      }

      if (result.valid){
        console.log("valid")
        res.send(xml)
      } // true
    });
  });
});

router.get('/:constructorId', function(req, res, next) {
  Constructor.find({constructorId: req.params.constructorId.toString()}, {_id: 0}, function (err, constructor){

    xml = json_to_xml(constructor)

    validator.validateXML(xml, '../schemas/constructors.xsd', function(err, result) {
      if (err) {
        res.render('error.njk');
      }

      if (result.valid){
        console.log("valid")
        res.send(xml)
      } // true
    });
  });
});

router.post('/', function(req, res, next) {
  Constructor.findOne().sort({constructorId: -1}).exec(function (err, result){
    if (err){
      res.render('error.njk')
    }
    let constructorId = result.constructorId + 1;
    const newConstructor = new Constructor();
    newConstructor.constructorId = constructorId;
    newConstructor.constructorRef = req.body.constructorRef;
    newConstructor.name = req.body.name;
    newConstructor.nationality = req.body.nationality
    newConstructor.save()
    res.send(constructorId.toString())

  });
});
module.exports = router;
