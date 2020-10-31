const express = require('express')
const path = require('path')
const hbs = require('hbs')
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const port = process.env.PORT || 3000
// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))
const app = express()
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../template/views'))
//to define a different template name except view---^
app.use(express.static(path.join(__dirname,'../public')))
//to render static pages---^
hbs.registerPartials(path.join(__dirname,'../template/partials'))
app.get('',(req,res)=>{
    res.render('index',{
        title:"wather",
        name:"amar"
    })
})
app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/help',(req,res)=>{
    res.send("help me express")
})

app.get('/about',(req,res)=>{
    res.send("I am the best")
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"no location entere"
        })
    }
    geocode(req.query.address,(error,{lattitude,longitude,place}={}) => {
        if(error) res.send(error)
        else{
        forecast(lattitude,longitude, (error, data) => {
            //if(error) return console.log(error)
            //console.log(place)
            if(error) res.send(error)
            res.send({
                forecast:data,
                location:place
            })
         })
        }
    })
})

app.get('/about/*',(req,res)=>{
    res.render('about_help')
})

app.get('*',(req,res)=>{
    res.render('general_help')
})

app.listen(port,()=>
{
    console.log("server is up")
})