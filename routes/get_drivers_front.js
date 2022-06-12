var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.post('/', async function (req, res, next) {
// drivers-get ---------------------------------------------------------------------------
    if (req.body.formInstance == "get") {
        if (req.body.id == ""){
            try {
                const consulta = await axios.get('http://localhost:3000/drivers')
                drivers = consulta.data
                res.render('get_drivers_front.njk', {data: drivers});
            } catch (error) {
                console.error(error);
            }
        }
        // drivers-get con id ---------------------------------------------
        else if (req.body.id){
            try {
                let urlString = `http://localhost:3000/drivers/${req.body.id}`
                const consulta = await axios.get(urlString)
                drivers = consulta.data
                res.render('get_drivers_front.njk', {data: drivers});
            } catch (error) {
                console.error(error);
            }
        }
    }
    else if (req.body.formInstance == "post"){ //--------post-------------------------------------
        try {
            let urlString = `http://localhost:3000/drivers/`
            driverJson = {
                driverRef: req.body.driverRef,
                number: req.body.number,
                code: req.body.code,
                forename: req.body.forename,
                surname: req.body.surname,
                dob: req.body.dob,
                nationality: req.body.nationality
            };
            const consulta = await axios.post(urlString, driverJson)
            res.sendStatus(200)
        } catch (error) {
            console.error(error);
        }

    }


});

module.exports = router;