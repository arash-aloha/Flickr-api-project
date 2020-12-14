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

let currentPage = 1;



// eventlistener in Form-group = searchinput
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchInput.focus(); 
    //console.log(searchInput.value);
    getPhotos(searchInput.value);
    searchInput.value = ""
    
})

//api function
async function getPhotos(searchPhotos) {
    try {
    //call api
    const response = await fetch(`${baseUrl}&api_key=${key}&text=${searchPhotos}&format=json&nojsoncallback=1&sort=relevance&per_page=50&page=${currentPage}&extras=url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l`);
    //await the respons and data
    const data = await response.json();
    console.log(data);
    //console.log(data.photos);



    //new object 
    let meta = {
        page: data.photos.page, //a page of pages
        pages: data.photos.pages, //number of pages
        perpage: data.photos.perpage, // how many photos are in one page
        total: data.photos.total, //total number of photos
        extras: data.photos.url //size
    };
        console.log(meta.page, (meta.pages), (meta.perpage), (meta.extras));

    //call below function - use the received data
    renderPhotos(data.photos);
    
    //inform the user if error
    } catch(error) {
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
    item.innerHTML = `<img src="https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}.jpg">`;
    //item.style.cssText = 'display:flex; flex-wrap: wrap; align-items: center; width: 100%;'        


    
//First slide image set to 1
let slideIndex = 1
showSlides(slideIndex);
console.log(slideIndex)


//next/previous controls
function plusSlides(image) {
showSlides(slideIndex += image);
console.log(image)
}

//thumnail image controls
function currentSlide(image) {
showSlides(slideIndex = image);
console.log(image)
}

function showSlides(value) {
    
let i;
let slidePhotos = document.getElementsByClassName('slides')
let dot = document.getElementsByClassName('dot')
        
        if (value > slidePhotos.length) {
            slideIndex = 1; { 
                console.log(slidePhotos)
            } if (value < 1) {
            slideIndex = slidePhotos.length; }
            } for (i = 0; i < slidePhotos.length; i++) {
                slidePhotos[i].style.display = "display";
            } for (i = 0; i < dot.length; i++) {
                dot[i].className = dot[i].className.replace(" active", "");
            } slidePhotos[slideIndex-1].style.display = "block";
            dot[slideIndex-1].className += " active";
        }
        
    });  
};















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



/********************************
 * 
/*

let meta = {
    page: data.photos.page, //a page of pages
    pages: data.photos.pages, //number of pages
    perpage: data.photos.perpage, // how many photos are in one page
  };


******************************************/

/*****************************************
//fetch getSizes
async function getImageSizez(getImageSize) {
    const imageResponse = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&&api_key=${key}&text=${getImageSize}&photo_id=${getImageSizez}&format=json&nojsoncallback=1`);
    const imageData = await imageResponse.json();
    console.log(imageData);
}
 ****************************************/