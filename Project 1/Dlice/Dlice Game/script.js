//Code that executes the first random dice
const randomNumber1=Math.floor(Math.random()*6)+1
// console.log(randomNumber1)
const randomImage1=`dice${randomNumber1}.png`

let imageSource1="images/"+randomImage1
let image1= document.querySelectorAll("img")[0]
image1.setAttribute("src",imageSource1)

//Code that executes the second random dice:
const randomNumber2=Math.floor(Math.random()*6)+1
// console.log(randomNumber2)
const randomImage2="dice"+randomNumber2+".png"
console.log(randomImage2)

let imageSource2='images/'+randomImage2
let image2= document.querySelectorAll('img')[1]
image2.setAttribute('src',imageSource2)


if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML="Player 1 wins🚩"
} else if(randomNumber2>randomNumber1){
    document.querySelector('h1').innerHTML="Player 2 wins🚩"
}else{
    document.querySelector("h1").innerHTML="It's a tie🥱"
}


let buttonClick=document.querySelector('button')
buttonClick.addEventListener('click',function(){
    window.location.reload()
})


// document.querySelector('h1').innerHTML="Player 1 wins"
// h1Value.setAttribute('h1',"Player 1 wins ")