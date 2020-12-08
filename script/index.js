//Söka efter bilder med hjälp av text
//Ställ in hur många man vill visa, alt. en “pager”
//Visa bilderna på ett snyggt sätt i galleri-form
//Kunna presentera klickad bild i större storlek ( ex. lightbox mode )


//decleration of variables

const baseUrl = `https://api.flickr.com/services/rest`;
const key = 'e00b7bb42a4363033989d5a2be6a1452';



async function getPhotos() {
    const response = await fetch(`baseUrl` + `?method=flickr.photos.search`, {
        headers: {
            'Authorization': 'Client-ID ' + key
        }
    })
}

const data = await response.json();
console.log(data)
}

getPhotos();


//`https://api.flickr.com/services/rest?method=flickr.photos.search