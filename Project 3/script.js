// const { json } = require("body-parser");

// axios.get('https://api.openweathermap.org/data/2.5/weather?q=New York&appid=091407001ef812a094e745e66dde647b&units=metric')
//     .then((result) => {
//         let buttonClick= document.querySelector('button').addEventListener('click', ()=>{
//             document.querySelector('#new_element').innerHTML=`<h2>The current wind speed is: ${result.data.wind.speed}</h2>`

//         })
        
        
//     }).catch((err) => {
//         console.log(err)
//     });


// AXIOS is a open source library to parse API data 

// Here we need to use the async function 
let tellDadJokes= async()=>{
    let config= {Headers:{Accept:"application/json"}}
    let randomScript= await axios.get('https://icanhazdadjoke.com/',config)
    console.log(randomScript)
}