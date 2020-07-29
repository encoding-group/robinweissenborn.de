# robin

## getData functions and expected return objects

``` js
function getPage( id ) {
    return {
        title: "Titel",
        info: "Text" // post body content
    };
}

function getPage( id = 'info' ) {
    return {
        title: "Titel",
        info: "Text", // post body content
        contact: "Contact" // custom field
    };
}

let imageObject = {
    small: "image-600.jpg",
    medium: "image-900.jpg",
    large: "image-1600.jpg",
    full: "image-2000.jpg",
    width: 2000,
    height: 1300,
    caption: "Alt text" // image alt text
}

function getPosts() {
    return [
        {
            title: "Projekt Sommersemester 2015",
            titleShort: "Projekt S15", // custom text field
            year: 2019, // date('Y')
            image: imageObject,
            client: "Kunde", // wordpress category
            discipline: "Poster" // wordpress tag
        }
    ];
}

function getPost(id) {
    return {
        title: "Titel",
        year: 2019,
        image: imageObject,
        client: "Kunde", // category
        discipline: "Poster", // tags,
        galleries: [
            {
                headline: "Gallery headline",
                slides: [
                    imageObject,
                    {
                        video: "https://vimeo.com/23456789",
                        caption: "Alt text"
                    }
                ]
            }
        ],
        info: "Text", // post body content
    };
}
```
