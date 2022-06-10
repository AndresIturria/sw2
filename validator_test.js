var validator = require('xsd-schema-validator');

validator.validateXML({file:'schemas/test.xml'}, 'schemas/constructors.xsd', function(err, result) {
    if (err) {
        throw err;
    }

    if (result.valid){
        console.log("true")
    } // true
});