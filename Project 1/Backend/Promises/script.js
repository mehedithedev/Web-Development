const deleyedColorChange= (color, deley)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.body.style.backgroundColor=color
            resolve()
        }, deley);
    })
}

deleyedColorChange('red', 1000)
    .then(()=>deleyedColorChange('green',1000))
    .then(()=>deleyedColorChange('blue', 1000))
    .then(()=>deleyedColorChange('green',1000))
    .then(()=>deleyedColorChange('yellow', 1000))
    .then(()=>deleyedColorChange('violet',1000))
    .then(()=>deleyedColorChange('indigo', 1000))
    