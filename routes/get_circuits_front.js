var express = require('express');
var router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const API_KEY = process.env.API_KEY
var xpath = require('xpath')
var dom = require('xmldom').DOMParser


async function weatherNow(place){

    try{
        const res = await axios.get('http://api.weatherapi.com/v1/current.json',
            { params: { key: API_KEY, q: place } })
        return(res.data.current)
    } catch (error) {
        console.error(error);
    }
}

async function weatherHistory(place){
    let queryDate = new Date()
    console.log(queryDate)
    //en caso de querer en el futuro preguntar por otros dias.
    /*    queryDate.setDate(queryDate.getDate()-1);
        let year = queryDate.getFullYear();
        let month = queryDate.getMonth()+1;
        let day = queryDate.getDate();
        formattedDate = ""+year+"-"+month+"-"+day*/

    try{
        const res = await axios.get('http://api.weatherapi.com/v1/history.xml',
            { params: { key: API_KEY, q: place, dt: queryDate } })


        return(res)
    } catch (error) {
        console.error(error);
    }
}


/* GET users listing. */
router.post('/', async function (req, res, next) {
// races-get ---------------------------------------------------------------------------
    if (req.body.formInstance == "get") {
        if (req.body.circuitId == ""){
            try {
                const consulta = await axios.get('http://localhost:3000/circuits')
                let circuits = consulta.data
                res.render('get_circuits_front.njk', {data: circuits, conditional: false,});
            } catch (error) {
                console.error(error);
            }
        }
        // drivers-get con id ---------------------------------------------
        else if (req.body.circuitId){

            try {

                let urlString = `http://localhost:3000/circuits/${req.body.circuitId}`
                const consulta = await axios.get(urlString)
                let circuits = consulta.data
                //api externa
                //json
                let temperaturaJson = await weatherNow(circuits[0].location);
                let temperatura = temperaturaJson.temp_c
                //xml
                let consultaxml = await weatherHistory(circuits[0].location);
                let xml = consultaxml.data
                var doc = new dom().parseFromString(xml);
                var nodes = xpath.select("//maxtemp_c/text()", doc);
                var nodes2 = xpath.select("//mintemp_c/text()", doc);
                max_min = {
                    max: nodes[0].toString(),
                    min: nodes2[0].toString()
                }


                res.render('get_circuits_front.njk', {conditional: true, data: circuits, temperatura: temperatura, max_min: max_min});
            } catch (error) {
                console.error(error);
            }
        }
    }
    else if (req.body.formInstance == "post"){ //--------post-------------------------------------
        try {
            let urlString = `http://localhost:3000/circuits/`
            circuitJson = {
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