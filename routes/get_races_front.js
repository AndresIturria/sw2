var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.post('/', async function (req, res, next) {
// races-get ---------------------------------------------------------------------------
    if (req.body.formInstance == "get") {
        if (req.body.raceId == ""){
            try {
                const consulta = await axios.get('http://localhost:3000/races')
                races = consulta.data
                res.render('get_races_front.njk', {data: races});
            } catch (error) {
                console.error(error);
            }
        }
        // drivers-get con id ---------------------------------------------
        else if (req.body.raceId){
            try {
                let urlString = `http://localhost:3000/races/${req.body.raceId}`
                const consulta = await axios.get(urlString)
                races = consulta.data
                res.render('get_races_front.njk', {data: races});
            } catch (error) {
                console.error(error);
            }
        }
    }
    else if (req.body.formInstance == "post"){ //--------post-------------------------------------
        try {
            let urlString = `http://localhost:3000/races/`
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