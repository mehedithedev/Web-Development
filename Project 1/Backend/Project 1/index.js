// Makes sure it's ES6
// jshint esversion:6


// // console.log("hello world")

// // const fs = require('fs');

// // fs.copyFileSync('file1.txt', 'file2.txt')
// /// CopyFileSync has synced the file1 and file 2
// /// fs.copyFileSync('sourceFile', 'destinationFile')

// const superheroes=require('superheroes')
// let nameOfSueprhero= superheroes.random()
// console.log(`The name of superhero is: ${nameOfSueprhero}`)
// // Prints a superhero randomly


// const supervillains = require('supervillains')
// let nameofSupervillain=supervillains.random()
// console.log(`Name of super Villain is: ${nameofSupervillain}`)
// // console.log(supervillains)


// Using express JS

const express=require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true})) /// To grab information from HTML: bodyParser.urlencoded({extended:true})

// Specifies what should happen : 

// Used to get element from index.html
app.get('/', function (req,res) {
    res.sendFile(__dirname+ "/index.html")     ///  (/) means home directory
})


// Used to post on the webpage:
app.post('/',(req,res)=>{
    let num1=parseInt(req.body.first_num)
    let num2=parseInt(req.body.second_num)
    // console.log(typeof(num1))
    let result=num1+num2
    res.send('The summetion of two number is: '+result)
})

// In order to get data from a webpage we need to use the body-parser npm packege

// console.log(req.body)








// Setting up the new route as the contact page: 
app.get('/contact',(req,res)=>{
    res.send('This is the cotact page')
})

// Setting up the new route as the about page: 
app.get('/about',(req,res)=>{
    res.send('This is Mehedi Hasan the Full-Stack Developer')
})

app.get('/hobbies', (req,res)=>{
    res.send('This is the hobbies page added with the help of nodemon')
})
// Starts the server on specified port of localhost:
app.listen(3000,function(){
    console.log("The server has been started!")
})



