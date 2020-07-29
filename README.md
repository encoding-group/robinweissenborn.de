# robin

## Wordpress setup

Let’s do as little modifications to wordpress as possible.
- Rename "Tags" taxonomy to "Discipline"
- Rename "Category" taxonomy to "Client"
- Add "Short title" custom text field to posts
– Add a nested repeater field to posts, that let’s you create 2-dimensional galleries with either an image or a external video url

## get page data

``` js
function getPage( id ) {
    return {
        title: "Titel",
        info: "Page content"
    };
}
```

## get post data

```js
function getPosts() {
    return [
        {
            url: "url",
            title: "Very long and original project title",
            titleShort: "Title", // custom text field
            year: 2019,
            image: imageObject,
            client: "Kunde", // category
            discipline: "Poster" // tag
        }
    ];
}

function getPost(id) {
    return {
        url: "url",
        title: "Very long and original project title",
        titleShort: "Title",
        year: 2019,
        image: imageObject,
        client: "Kunde", // category
        discipline: "Poster", // tags,
        galleries: [
            galleryObject
        ],
        info: "Post content"
    };
}
```

## Schemas

```js
let imageObject = {
    small: "image-600.jpg",
    medium: "image-900.jpg",
    large: "image-1600.jpg",
    full: "image-2000.jpg",
    width: 2000,
    height: 1300,
    caption: "Alt text" // image alt text
}

let galleryObject = {
    headline: "Gallery headline",
    slides: [
        imageObject,
        {
            video: "https://vimeo.com/23456789",
            caption: "Alt text"
        }
    ]
};
```

