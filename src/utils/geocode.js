const request = require('request')
const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoibm9kZXVzZXIiLCJhIjoiY2s2MGMyMjJ0MDZmejNrbnYwMGE1Mno1NiJ9.ocA7s6kTYefeeFcfB5zrCw'
    request({url,json:true},(error,{body})=>{
     if(error){
         callback('can not find the page',undefined)
     }   
     else if(body.features.length==0) callback('system error',undefined)
     else {
         callback(undefined,{
             longitude:body.features[0].center[0],
             lattitude:body.features[0].center[1],
             place:body.features[0].place_name
         })
     }
    })
}
module.exports = geocode