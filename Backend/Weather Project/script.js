const express=require('express')
const nodemon=require('nodemon')
const bodyParser=require('body-parser')
const https = require('https')
const { response } = require('express')

const app= express()

app.get('/',(req,res)=>{
    const urlOfOpenWeatherAPI= "https://api.openweathermap.org/data/2.5/weather?q=New York&appid=091407001ef812a094e745e66dde647b&units=metric"
    https.get(urlOfOpenWeatherAPI,(response)=>{
        console.log(response.statusCode)
        response.on('data', )
    })


})

app.listen(3000,()=>{
    console.log('listening on',3000)

})
    