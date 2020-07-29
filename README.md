# robin

## Wordpress setup

Let’s do as little modifications to wordpress as possible.
- Rename "Tags" taxonomy to "Discipline"
- Rename "Category" taxonomy to "Client"
- Add "Short title" custom text field to posts
- Add a nested repeater field to posts, that let’s you create 2-dimensional galleries with either an image or a external video url
- Create 2 pages "Info" and "Imprint"

## Data schemas

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
            caption: "Alt text" // optional
        }
    ]
};

let postObject = {
    url: "url",
    title: "Very long and original project title",
    titleShort: "Title", // custom text field
    year: 2019,
    image: imageObject,
    client: "Kunde", // category
    discipline: "Poster" // tag
};
```

## get post data

```js
function getPostsData() {
    return [
        postObject
    ];
}

function getPostData(id) {
    // extend postObject with galleries and content
    return Object.assign(postObject, {
        galleries: [
            galleryObject
        ],
        content: "Post content"
    });
}
```

## get page data

``` js
function getPageData( id ) {
    return {
        title: "Titel",
        content: "Page content"
    };
}
```

## get site data
Can either be site-settings or custom fields of the Info page

``` js
function getSiteData( id ) {
    return {
        title: "Titel",
        keywords: ["tag 1", "tag 2"],
        description: "Text",
        contact: {
            person: "Name",
            email: "e@mail.com",
            tel: "+49123456789",
            street: "Street",
            zip: "01234",
            city: "City",
            country: "Germany"
        },
        image: "image-1000x1000px.jpg"
    };
}
```

