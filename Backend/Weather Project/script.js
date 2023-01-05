const express= require('express')
const nodemon= require('nodemon')
const bodyParser= require('body-parser')
const http= require('http')
const https = require('https');
const { response } = require('express');
// setting up the dependencies of those modules

const app=express()
// Setting up bodyParser to post elements from HTML documents:
app.use(bodyParser.urlencoded({extended:true}))
let url='https://api.openweathermap.org/data/2.5/weather?q=New York&appid=091407001ef812a094e745e66dde647b&units=metric'

app.get('/', (req,res)=>{
    res.send(`The server is up and running`)
    https.get(url, (response)=>{
        console.log(response.statusCode)
        // This code is gonna parse the JSON file: 
        response.on('data', function(data){
            console.log(data)
            JSON.parse(data)
        })
    })
})

app.listen('5000', ()=>{
    console.log(`The server is running at port: 5000`)
})