var express = require('express');
const Constructor = require("../models/constructor");
var router = express.Router();
const { toXML } = require('jstoxml');
var xpath = require('xpath')
var dom = require('xmldom').DOMParser

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
    res.send(xml)
  });
});

module.exports = router;
