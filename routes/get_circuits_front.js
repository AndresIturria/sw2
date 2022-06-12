var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.post('/', async function (req, res, next) {
// races-get ---------------------------------------------------------------------------
    if (req.body.formInstance == "get") {
        if (req.body.circuitId == ""){
            try {
                const consulta = await axios.get('http://localhost:3000/circuits')
                circuits = consulta.data
                res.render('get_circuits_front.njk', {data: circuits});
            } catch (error) {
                console.error(error);
            }
        }
        // drivers-get con id ---------------------------------------------
        else if (req.body.circuitId){
            try {
                let urlString = `http://localhost:3000/circuits/${req.body.circuitId}`
                const consulta = await axios.get(urlString)
                races = consulta.data
                res.render('get_circuits_front.njk', {data: raccircuitss});
            } catch (error) {
                console.error(error);
            }
        }
    }
    else if (req.body.formInstance == "post"){ //--------post-------------------------------------
        try {
            let urlString = `http://localhost:3000/circuits/`
            circuitson = {
                circuitRef: req.body.circuitRef,
                name: req.body.name,
                circuitId: req.body.circuitId,
                location: req.body.location,
                country: req.body.country
            };
            const consulta = await axios.post(urlString, circuitJson)
            res.send("<p>Circuit added</p> </p><a href='/circuits_front'>Go Back</a>");
        } catch (error) {
            console.error(error);
        }

    }
    else if(req.body.formInstance == "put"){ // ----------------put---------------------------------
        let urlString = `http://localhost:3000/circuits/${req.body.circuitId}`
        circuitJson = {
            circuitRef: req.body.circuitRef,
            name: req.body.name,
            circuitId: req.body.circuitId,
            location: req.body.location,
            country: req.body.country
        };
        try {
            const consulta = await axios.put(urlString, circuitJson)
            res.send("<p>Circuit updated<p></p><a href='/circuits_front'>Go Back</a>");
        } catch (error) {
            console.error(error);
        }
    }


});

module.exports = router;