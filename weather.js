require('dotenv').config()
const axios = require('axios');
const API_KEY = process.env.API_KEY
var xpath = require('xpath')
var dom = require('xmldom').DOMParser
console.log(API_KEY)
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

//Future not supported in free license
/*async function weatherFuture(place, date){ // Date must be between 14 and 300 days in the future yyyy-MM-dd

    try{
        const res = await axios.get('http://api.weatherapi.com/v1/future.json',
            { params: { key: API_KEY, q: place, dt: date } })
        return(res.data)
    } catch (error) {
        console.error(error);
    }
}*/

weatherNow("Madrid").then(function (response) {
    // handle success
    console.log(response.temp_c);
})
weatherHistory("Madrid").then(function (response) {
    // handle success
    var xml = response.data;
    var doc = new dom().parseFromString(xml);
    var nodes = xpath.select("//maxtemp_c/text()", doc);
    var nodes2 = xpath.select("//mintemp_c/text()", doc)
    console.log(nodes[0].toString());
    console.log(nodes2[0].toString());
})
