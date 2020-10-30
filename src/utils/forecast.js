const request = require('request')

const forecast = (lattitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/912aa0fe214a6d5a7b6379af29a4cf98/'+lattitude+','+longitude;
    request({url,json:true},(error,{body})=>{
        if(error) callback('system error',undefined)
        else if(body.error) callback('can not find the location',undefined)
        else {
           // console.log(response.body.currently.temperature)
            callback(undefined,"currently there is "+body.currently.temperature+
            " and there is "+body.currently.precipProbability+" chance of pretipitation")
        }
    })
}

module.exports = forecast