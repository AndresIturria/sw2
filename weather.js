require('dotenv').config()
const axios = require('axios');
const API_KEY = process.env.API_KEY

async function test(place){

    try{
        const res = await axios.get('http://api.weatherapi.com/v1/current.json',
            { params: { key: API_KEY, q: place } })
        return(res.data.current)
    } catch (error) {
        console.error(error);
    }
}

test("Madrid").then(function (response) {
    // handle success
    console.log(response);
})



