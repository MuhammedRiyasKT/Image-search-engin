const accesskey = "nFaFF76NRfxn4z7Jy7FJGVCLhdWtG1LqluFELGH9MtM"

const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const showMoreBtn = document.getElementById("show-more-btn")


let keyword = ""
let page = 1

async function searchImage(){
    keyword = searchBox.value
    let url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`

    const response = await fetch(url)
    const data = await response.json()

    if(page === 1){
        searchResult.innerHTML = "";
    }

    let results = data.results

    results.forEach((result)=>{
        
        result.preview_photos.forEach((photo)=>{
        const image = document.createElement("img")
         image.src = photo.urls.small;
         console.log('this is a', image.src)

        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = "_blank" 


        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
        })
        
    })
    showMoreBtn.style.display = "block"

}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    page = 1
    searchImage()
})

showMoreBtn.addEventListener("click", ()=>{
    page++
    searchImage()
})