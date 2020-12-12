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
    const response = await fetch(`${baseUrl}&api_key=${key}&text=${searchPhotos}&format=json&nojsoncallback=1&sort=relevance&per_page=50&page=${currentPage}&extras=url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l&`);
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
        size: data.photos.photo //size
      };
      console.log(meta.page, (meta.pages), (meta.perpage), (meta.photo));

      
      

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
    //add li element and data
    imageList.appendChild(item);
    item.innerHTML = `<img src="https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}.jpg">`;
    
    //item.style.cssText = 'display:flex; flex-wrap: wrap; align-items: center; width: 100%;'  
        
    });  
};



//pagination
nextPage.addEventListener('click', () => {
    
    currentPage++;
    console.log(nextPage)
    renderPhotos(meta.page)
    console.log(renderPhotos)
});

//onclick image full-screen











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
