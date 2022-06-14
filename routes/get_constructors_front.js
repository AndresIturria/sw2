var express = require('express');
var router = express.Router();
const axios = require('axios');
const Constructor = require("../models/constructor");
const Circuit = require("../models/circuit");

/* GET users listing. */
router.post('/', async function (req, res, next) {
// constructors-get ---------------------------------------------------------------------------
    if (req.body.formInstance == "get") {
        if (req.body.constructorId == ""){
            Constructor.find({}, {_id: 0}, function (err, constructors){
                res.render('get_constructors_front.njk', {data: constructors});
            });
        }
        // con id ---------------------------------------------
        else if (req.body.constructorId){
            Constructor.find({constructorId: req.body.constructorId}, {_id: 0}, function (err, constructors){
                res.render('get_constructors_front.njk', {data: constructors});
            });

        }
    }
    else if (req.body.formInstance == "post"){ //--------post ------------------------------------
        Constructor.findOne().sort({constructorId: -1}).exec(function (err, result){
            if (err){
                res.render('error.njk');
            }
            let constructorId = result.constructorId + 1;
            const newConstructor = new Constructor();
            newConstructor.constructorId = constructorId;
            newConstructor.constructorRef = req.body.constructorRef;
            newConstructor.name = req.body.name;
            newConstructor.nationality = req.body.nationality;
            newConstructor.save();
            res.send("<p>Constructor updated<p></p><a href='/constructors_front'>Go Back</a>");

        });

    }
    else if (req.body.formInstance == "put"){ // ----------------put---------------------------------
        let urlString = `http://localhost:3000/constructors/${req.body.constructorId}`
        let constructorJson = {
            constructorRef: req.body.constructorRef,
            name: req.body.name,
            nationality: req.body.nationality
        };
        try {
            const consulta = await axios.put(urlString, constructorJson)
            res.send("<p>Constructor updated<p></p><a href='/constructors_front'>Go Back</a>");
        } catch (error) {
            console.error(error);
        }
    }


});

module.exports = router;