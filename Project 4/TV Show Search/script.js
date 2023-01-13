form=document.querySelector('#searchForm')

form.addEventListener('submit', async (evt)=>{
    evt.preventDefault() // preventDefault() method can be used to prevent the auto page refresh. 
    console.log("Form Submitted")
    let queryValue= document.querySelector('input').value
    console.log(`The user input is: ${queryValue}`)
    let tvShowFetch= await axios.get(`https://api.tvmaze.com/search/shows?q=${queryValue}`)
    // console.log(tvShowFetch.data[0].show.image.medium)
    imageSource(tvShowFetch.data)
})
let imageSource= (imageData)=>{
    for(tvShow of imageData){
        console.log(imageData)
        const img= document.createElement('img')
        img.src=tvShow.show.image.medium
        document.body.append(img)   
    }
}
