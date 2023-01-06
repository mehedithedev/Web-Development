const express= require('express')
const bodyParser= require('body-parser')
const https = require('https');
const nodemon= require('nodemon');
// const { resolve } = require('path');

const app=express()
app.use(bodyParser.urlencoded({extended:true}))





app.get('/', (req,res)=>{
    res.sendFile(__dirname+ "/index.html")   
})


// Post from the HTML
app.post('/', (req,res)=>{
    console.log('The server request is been accepted') 
    const nameofCity= req.body.cityName   
    // console.log(userCity)
// Here is the code to retrive weather information from the OpenWeather API: 
// Fetching data from Open Weather API: 
    // Sorting up variables for particular city names: 
    const url='https://api.openweathermap.org/data/2.5/weather?q='+nameofCity+'&appid=091407001ef812a094e745e66dde647b&units=metric'
    https.get(url, (response)=>{
        console.log(response.statusCode)
        response.on('data', (data)=>{
            // Fetch data from Open Weather Api:
            const weatherInfo=JSON.parse(data)
            const temperature= weatherInfo.main.temp
            const weatherDescription=weatherInfo.weather[0].description
            const feelsLike= weatherInfo.main.feels_like
            const icon= weatherInfo.weather[0].icon
            const iconURL= "http://openweathermap.org/img/wn/"+icon+"@2x.png"
            const humidity=weatherInfo.main.humidity
            const windSpeed=weatherInfo.wind.speed


            // Outputs the data into the web app
            res.write('<h1> The current temperature in '+nameofCity +' is '+ temperature +' degree celsius</h1>')
            res.write('<h2> The weather condition is: '+ weatherDescription +'</h2>')
            res.write(`<h3>It feels like ${feelsLike} here in ${nameofCity}</h3>`)
            res.write('<img src='+iconURL+'>')
            res.write(`<h3>The humidity is: ${humidity}</h3>`)
            res.write(`<h3>The wind speed is: ${windSpeed} KM/H</h3>`)

        })
        // console.log(weatherInfo)
        

    })







})



const port = 3000
app.listen(port, ()=>{
    console.log(`The port is been started on : ${port}`)
})
