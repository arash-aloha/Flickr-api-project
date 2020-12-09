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

/****************************
getPhotos() 
    .then(response => {
        console.log('It works!!!');
    })
    .catch(error => {
        console.log('Error!')
        console.error(error);
    });
/*********************************/

//call api

async function getPhotos(searchPhotos) {
    const response = await fetch(`${baseUrl}&api_key=${key}&text=${searchPhotos}&format=json&nojsoncallback=1`); 
    const data = await response.json();
    console.log(data);
    console.log(data.photos);
};



//render photos

function renderPhotos(photoList) {
    photoList.forEach(value => {
        const item = document.createElement('li');
        item.innerHTML = 'value.';
        imageList.appendChild(item);
    });
};

//methods   'flickr.photos.getSizes'       'flickr.photos.getRecent'
