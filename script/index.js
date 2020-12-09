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
    console.log(searchInput.value);
    getPhotos(searchInput.value);
    searchInput.value = ""
    
})



//call api
async function getPhotos(searchPhotos) {
    const response = await fetch(`${baseUrl}&api_key=${key}&text=${searchPhotos}&format=json&nojsoncallback=1`); 
    const data = await response.json();
    console.log(data);
    //console.log(data.photos);
    renderPhotos(data.photos);
    //return await data   
};

//render photos
function renderPhotos(photoList) {
    photoList.photo.forEach(value => {
    console.log(value)
    const item = document.createElement('li');
    imageList.appendChild(item);
    item.innerHTML = `<img src="https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}.jpg">`;
    });

    
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