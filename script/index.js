//Söka efter bilder med hjälp av text
//Ställ in hur många man vill visa, alt. en “pager”
//Visa bilderna på ett snyggt sätt i galleri-form
//Kunna presentera klickad bild i större storlek ( ex. lightbox mode )


//decleration of variables

const baseUrl = `https://api.flickr.com/services/rest?method=flickr.photos.search`;
const key = 'e00b7bb42a4363033989d5a2be6a1452';
const imageList = document.querySelector('#images');   // UL element
const searchInput = document.querySelector('#searchInput');  // input element
const searchForm = document.querySelector('#form-group');  // form element




// eventlistener in Form-group = searchinput
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchInput.focus(); 
    //console.log(searchInput.value);
    addSearchedItem()
    getPhotos(searchInput.value);
    searchInput.value = ""
    
})

function addSearchedItem() {
    let text = document.getElementById('searchedItem')
    text.insertAdjacentText("afterbegin", 'search result for: ' + searchInput.value);
}


//api function
async function getPhotos(searchPhotos) {

    try {
    //call api
    const response = await fetch(`${baseUrl}&api_key=${key}&text=${searchPhotos}&format=json&nojsoncallback=1&sort=relevance&per_page=50&page=100`); 
    //await the respons and data
    const data = await response.json();
    console.log(data);
    //console.log(data.photos);

    //call below function - use the received data
    renderPhotos(data.photos);
    
    //inform the user
    } catch(error) {
        console.log('Catch Error message: It did not work!')
    }
    
}

//render photos
function renderPhotos(photoList) {
    photoList.photo.forEach(value => {
    console.log(value)
    const item = document.createElement('li');
    imageList.appendChild(item);
    item.innerHTML = `<img src="https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}.jpg">`;
    //item.style.cssText = 'width'
    
    });
    
};

let meta = {
    page: data.photos.page, //a page of pages
    pages: data.photos.pages, //number of pages
    perpage: data.photos.perpage, // how many photos are in one page
    total: data.photos.total //total number of photos
  };


  { console.log(data.perpage);
    photos = _.filter(photos, function(item) {return item});

  
};



//methods   'flickr.photos.getSizes'       
//          'flickr.photos.getRecent'





/*********************

D e l e t e d  c o d e s

**********************/


/********************************
getPhotos() 
    .then(response => {
        console.log('It works!!!');
    })
    .catch(error => {
        console.log('Error!')
        console.error(error);
    });
*********************************/