const express= require('express')
const bodyParser= require('body-parser')
const https = require('https');
const nodemon= require('nodemon');
// const { resolve } = require('path');

const app=express()
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    // res.sendFile(__dirname+ "/index.html")
    // Fetching data from Open Weather API: 
    const url='https://api.openweathermap.org/data/2.5/weather?q=New York&appid=091407001ef812a094e745e66dde647b&units=metric'
    https.get(url, (response)=>{
        console.log(response.statusCode)
        response.on('data', (data)=>{
            const weatherInfo=JSON.parse(data)
            const temperature= weatherInfo.main.temp
            console.log(temperature)

            res.send(temperature)
        })
        // console.log(weatherInfo)
        

    })


})
app.post('/', (req,res)=>{
    // console.log('The server request is been accepted') 
    const userCity= req.body.cityName   
    console.log(userCity)
// Here is the code to retrive weather information from the OpenWeather API: 
})
const port = 3000
app.listen(port, ()=>{
    console.log(`The port is been started on : ${port}`)
})
