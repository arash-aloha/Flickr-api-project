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
const searchedItem = document.getElementById('searchedItem');
let currentPage = 1;



// eventlistener in Form-group = searchinput
searchForm.addEventListener('submit', (e) => {
    //prevent webpage from default mode
    e.preventDefault();
    //search bar will be automatically be chosen after search hit
    searchInput.focus(); 
    //console.log(searchInput.value);
    //call below function
    getPhotos(searchInput.value);
    //deletes user input in search bar
    displayWord()
    searchInput.value = ""
    //displayWord()
})

//
displayWord = function() {
    //searchInput.innerHTML = null;
    let userInput = document.getElementById('searchInput').value
    console.log(userInput)

    if (userInput.length > 0) {
        console.log(userInput.length)
        document.getElementById('searchedItem').innerHTML = "search results for: " + userInput;   
    } else {
        console.log(false)
    }
}



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
     
});
};





 //First slide image set to 1
 let slideIndex = 1
 showSlides(slideIndex);
 console.log(slideIndex)



//next/previous controls - instead of onclick in html
function plusSlides(image) {
  let next = getElementsByClassName('next').addEventListener('click', () => {
      console.log(next)
  })
  let prev = getElementsByClassName('prev').addEventListener('click', () => {
      console.log(prev)
  })

  showSlides(slideIndex += image);
}


//display fullscreen image

function showSlides(value) {
  let slidePhotos = document.getElementsByClassName('slides')
  let dot = document.getElementsByClassName('dot')

  if (value > slidePhotos.length) {
      console.log(value)
      slideIndex = 1; {

      } if (value < 1) {
          slideIndex = slidePhotos.length;
      }
  } for (i = 0; i < slidePhotos.length; i++) {
      slidePhotos[i].style.display = "display";
  } for (i = 0; i < dot.length; i++) {
      dot[i].className = dot[i].className.replace(" active", "");
  } slidePhotos[slideIndex - 1].style.display = "block";
  dot[slideIndex - 1].className += " active";
}

//thumnail image controls
function currentSlide(image) {
    showSlides(slideIndex = image);
    console.log(showSlides(slideIndex))
}











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