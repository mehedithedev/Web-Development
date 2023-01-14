// `use strict`
// import 'react'

String.prototype.yell= function(){
    console.log(`This is string template literel: ${this.toUpperCase()}, This is post template`)
}

Array.prototype.pop= ()=>{
    console.log(`I can't give up this element from this arrey`)
}

const newArrey=[
    "firstElement", "secondElement"
]