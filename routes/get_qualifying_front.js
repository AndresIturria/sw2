var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.post('/', async function (req, res, next) {
// drivers-get ---------------------------------------------------------------------------
    if (req.body.formInstance == "get") {
        if (req.body.qualifyId == ""){
            try {
                const consulta = await axios.get('http://localhost:3000/qualifyings')
                qualifying = consulta.data
                res.render('get_qualifying_front.njk', {data: qualifying});
            } catch (error) {
                console.error(error);
            }
        }
        // drivers-get con id ---------------------------------------------
        else if (req.body.qualifyId){
            try {
                let urlString = `http://localhost:3000/qualifyings/${req.body.qualifyId}`
                const consulta = await axios.get(urlString)
                qualifying = consulta.data
                res.render('get_qualifying_front.njk', {data: qualifying});
            } catch (error) {
                console.error(error);
            }
        }
    }
    else if (req.body.formInstance == "post"){ //--------post-------------------------------------
        try {
            let urlString = 'http://localhost:3000/qualifyings/'
            qualifyingJson = {
                raceId: req.body.raceId,
                driverId: req.body.driverId,
                constructorId: req.body.constructorId,
                number: req.body.number,
                position: req.body.position,
                q1: req.body.q1,
                q2: req.body.q2,
                q3: req.body.q3,
            };
            const consulta = await axios.post(urlString, qualifyingJson)
            res.send("<p>Qualifying added</p> </p><a href='/'>Go Back</a>");
        } catch (error) {
            console.error(error);
        }

    }
    else if(req.body.formInstance == "put"){ // ----------------put---------------------------------
        let urlString = `http://localhost:3000/qualifyings/${req.body.qualifyId}`
        qualifyingJson = {
            raceId: req.body.raceId,
            driverId: req.body.driverId,
            constructorId: req.body.constructorId,
            number: req.body.number,
            position: req.body.position,
            q1: req.body.q1,
            q2: req.body.q2,
            q3: req.body.q3,
        };
        try {
            const consulta = await axios.put(urlString, qualifyingJson)
            res.send("<p>Qualifying updated<p></p><a href='/'>Go Back</a>");
        } catch (error) {
            console.error(error);
    }
    }

});

module.exports = router;