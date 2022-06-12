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
                console.log(urlString)
                const consulta = await axios.get(urlString)
                drivers = consulta.data
                res.render('get_drivers_front.njk', {data: drivers});
            } catch (error) {
                console.error(error);
            }
        }
    }
   // else if (req.body.formInstance ==)


});

module.exports = router;