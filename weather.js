require('dotenv').config()
const axios = require('axios');
const API_KEY = process.env.API_KEY

axios.get('http://api.weatherapi.com/v1/current.json', { params: { key: API_KEY, q: "Madrid" } })
    .then(res => {
        console.log(res.data);
    })
    .catch(error => {
        console.error(error);
    });

