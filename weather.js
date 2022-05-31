require('dotenv').config()
const axios = require('axios');
const API_KEY = process.env.API_KEY

async function test(){

    try{
        const res = await axios.get('http://api.weatherapi.com/v1/current.json',
            { params: { key: API_KEY, q: "Madrid" } })
        return(res.data)
    } catch (error) {
        console.error(error);
    }
}

test().then(function (response) {
    // handle success
    console.log(response);
})



