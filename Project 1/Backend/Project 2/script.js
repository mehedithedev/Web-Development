const bodyParser = require('body-parser');
const express = require('express');
const nodemon = require('nodemon');
const app= express()
app.use(bodyParser.urlencoded({extended:true}))
const port=2000

app.get('/',(req,res)=>{
    res.sendfile(__dirname+ "/index.html")
} )
app.post('/', (req,res)=>{
    let height= parseFloat(req.body.height)
    let weight= parseFloat(req.body.weight)
    let bmi= weight/(height**2)
    res.send(`Your BMI is: ${bmi}`)
})


// Listens to the server
app.listen(port, ()=>{
    console.log(`Your server is running at ${port} port`)
})