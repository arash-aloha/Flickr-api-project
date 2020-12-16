//(`${baseUrl}&api_key=${key}&text=${searchPhotos}&format=json&nojsoncallback=1&sort=relevance&per_page=50&page=${currentPage}&extras=url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l`);


//decleration of variables

const baseUrl = `https://api.flickr.com/services/rest?method=flickr.photos.search`;

const key = 'e00b7bb42a4363033989d5a2be6a1452';
const imageList = document.querySelector('#images');   // UL element
const searchInput = document.querySelector('#searchInput');  // input element
const searchForm = document.querySelector('#form-group');  // form element
const searchedItem = document.getElementById('searchedItem');

let currentPage = 1;
let perPage = "";
let meta = {};



/*******************************************************************************************/
// eventlistener in Form-group = searchinput
searchForm.addEventListener('submit', (e) => {
    //prevent webpage from default mode
    e.preventDefault();
    //search bar will be automatically be chosen after search hit
    searchInput.focus();
    //console.log(searchInput.value);
    //call below function
    getPhotos(searchInput.value);
    //fires displayWord function
    displayWord()
    //fire pagination function
    pages(nextPage, prevPage)
    //deletes user input in search bar
    searchInput.value = ""
    
})
/********************************************************************************************/
//display search input
displayWord = function () {
    //searchInput.innerHTML = null;
    let userInput = document.getElementById('searchInput').value
    //console.log(userInput)

    if (userInput.length > 0) {
        //console.log(userInput.length)
        document.getElementById('searchedItem').innerHTML = "search results for: " + userInput;
    } else {
        //console.log(false)
    }
}
/********************************************************************************************/
function pages(nextPage, prevPage) {
    nextPage = document.getElementById('nextPage').addEventListener('click', () => {
        console.log('nextPage')

        if (currentPage < numPages()) {
            currentPage++
            console.log(currentPage);
            changePage(currentPage)
        }
    })
    prevPage = document.getElementById('prevPage').addEventListener('click', () => {
        console.log('prevPage')

        if (currentPage > 1) {
            currentPage--
            console.log(currentPage);
            changePage(currentPage)
        }
    })

    /*** nedan bit vet jag inte riktigt vad jag sysslar med... hihi***/
    function changePage(page) {
        let listingTable = document.getElementById('listingTable')
        let pageNumber = document.getElementById('pageNumber')
    
        //validate page
        if (page < 1) page = 1;
        if (page > numPages()) page = numPages();
    
        //do not stack upon eachother
        listingTable.innerHTML = ""; 
    
        for (let i = (page-1) * perPage; i < (page * perPage);
            listingTable.innerHTML += 
    }
    
}



/************************************************************************************************/


//api function
async function getPhotos(searchPhotos) {
    try {
        //call api
        const response = await fetch(`${baseUrl}&api_key=${key}&text=${searchPhotos}&&sort=relevance&per_page=${perPage}&page=${currentPage}&format=json&nojsoncallback=1`);    //await the respons and data
        const data = await response.json();
        console.log(data);
        //console.log(data.photos);

        //call below function - use the received data
        renderPhotos(data.photos);

        //inform the user if error
    } catch (error) {
        console.log('Catch Error message: It did not work!')
        alert('Something went wrong!')
    }

}



//render photos
function renderPhotos(photoList) {
    //when new search is made - clear previous search
    imageList.innerHTML = ''
    //create a list-item for each image
    photoList.photo.forEach(value => {
        const item = document.createElement('li');
        console.log(value)

        //eventlistener for click on image
        item.addEventListener('click', () => {
            showSlides(slideIndex, value)
        })

        //add li element and data
        imageList.appendChild(item);
        item.innerHTML = `<img src="https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}_m.jpg">`;

        //item.addeventlistenr('click', ()=>)
        //(`https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}_b.jpg`, value.title);
    });
} 






    //First slide image set to 1
    let slideIndex = 1


    //next/previous controls - instead of onclick in html
    function moveSlides() {
        let next = getElementsByClassName('next').addEventListener('click', () => {
            console.log(next)
        })
        let prev = getElementsByClassName('prev').addEventListener('click', () => {
            console.log(prev)
        })
    }

