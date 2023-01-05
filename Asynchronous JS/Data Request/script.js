const dataRequest= (url)=>{
    return new Promise((resolve, reject)=>{
        const delay= 2000
        setTimeout(() => {
            if (delay>4000){
                reject('Connection Abroated')
            } else{
                resolve('Here is your data from: '+url)
            }
        }, delay);
    })
}

async function makeTwoRequests(){
    let data1= await dataRequest('/page1');
    console.log(data1)
}