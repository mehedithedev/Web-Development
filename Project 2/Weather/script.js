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
            const weatherDescription=weatherInfo.weather[0].description
            const feelsLike= weatherInfo.main.feels_like
            const icon= weatherInfo.weather[0].icon
            const iconURL= "http://openweathermap.org/img/wn/"+icon+"@2x.png"
            res.write('<h1> The current temperature in New York is: '+ temperature +'degree celsius</h1>')
            res.write(`The weather condition is: ${weatherDescription}`)
            res.write(`It feels like ${feelsLike} here in New York`)
            res.write('<img src='+iconURL+'>')

        })
        // console.log(weatherInfo)
        

    })


})
// app.post('/', (req,res)=>{
//     // console.log('The server request is been accepted') 
//     const userCity= req.body.cityName   
//     console.log(userCity)
// // Here is the code to retrive weather information from the OpenWeather API: 
// })
const port = 3000
app.listen(port, ()=>{
    console.log(`The port is been started on : ${port}`)
})
