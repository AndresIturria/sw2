var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.post('/', async function (req, res, next) {
// constructors-get ---------------------------------------------------------------------------
    if (req.body.formInstance == "get") {
        if (req.body.constructorId == ""){
            try {
                const consulta = await axios.get('http://localhost:3000/constructors')
                constructors = consulta.data
                res.render('get_constructors_front.njk', {data: constructors});
            } catch (error) {
                console.error(error);
            }
        }
        // con id ---------------------------------------------
        else if (req.body.constructorId){
            try {
                let urlString = `http://localhost:3000/constructors/${req.body.constructorId}`
                const consulta = await axios.get(urlString)
                constructors = consulta.data
                res.render('get_constructors_front.njk', {data: constructors});
            } catch (error) {
                console.error(error);
            }
        }
    }
    else if (req.body.formInstance == "post"){ //--------post ------------------------------------
        try {
            let urlString = `http://localhost:3000//`
            raceJson = {
                year: req.body.year,
                round: req.body.round,
                circuitId: req.body.circuitId,
                name: req.body.name,
                date: req.body.date,
                time: req.body.time
            };
            const consulta = await axios.post(urlString, raceJson)
            res.send("<p>Race added</p> </p><a href='/races_front'>Go Back</a>");
        } catch (error) {
            console.error(error);
        }

    }
    else if(req.body.formInstance == "put"){ // ----------------put---------------------------------
        let urlString = `http://localhost:3000/races/${req.body.raceId}`
        raceJson = {
            year: req.body.year,
            round: req.body.round,
            circuitId: req.body.circuitId,
            name: req.body.name,
            date: req.body.date,
            time: req.body.time
        };
        try {
            const consulta = await axios.put(urlString, raceJson)
            res.send("<p>Race updated<p></p><a href='/races_front'>Go Back</a>");
        } catch (error) {
            console.error(error);
        }
    }


});

module.exports = router;