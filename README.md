# robin

[Design](https://xd.adobe.com/view/f319731e-013b-449e-b3a4-28f1928739d1-a64a/screen/bfd93f1f-0aad-42bf-96ac-a974b6444d9f)

## Wordpress setup

Let’s do as little modifications to wordpress as possible.

- Add "Short title" custom text field to posts
- Add a nested repeater field to posts, that let’s you create 2-dimensional galleries with either an image or a external video url
- Create 2 pages "Info" and "Imprint"
- Enable api

Cosmetic optionally:

- Rename "Tags" taxonomy to "Discipline"
- Rename "Category" taxonomy to "Client"

## Data schemas

```js
let imageObject = {
  small: "image-600.jpg",
  medium: "image-900.jpg",
  large: "image-1600.jpg",
  full: "image-2000.jpg",
  width: 2000,
  height: 1300,
  caption: "Alt text",
};

let galleryObject = {
  headline: "Gallery headline",
  slides: [
    imageObject,
    {
      video: "https://vimeo.com/23456789",
      caption: "Alt text", // optional
    },
  ],
};

let postObject = {
  client: ["Kunde"], // category taxonomy
  content: "<p>lorem ipsum dolor sit amet...</p>", // HTML markup
  discipline: ["Poster"], // tags taxonomy
  galleryGrid: [Array(3), Array(3), Array(3)], // 2d Array
  id: 1,
  isProduct: true,
  price: 123.45, // exists only if isProduct is true
  productInfo: "lorem ipsum dolor sit amet...", // exists only if isProduct is true
  slug: "my-first-post",
  title: "Very long and original project title",
  titleShort: "Title", // custom text field
  titleImage: imageObject,
  year: 2019,
  featured: true // wp sticky post, frue if this post should be shown on home page
};

let productObject = isProduct
  ? {
      info: "Text",
      price: 10.0,
    }
  : false;
```

### get post data

```js
function getPostsData() {
  return [postObject];
}

function getPostData(id) {
  // extend postObject with galleries and content
  return Object.assign(postObject, {
    galleries: [galleryObject],
    content: "Post content",
    product: productObject,
  });
}
```

### get page data

```js
function getPageData(id) {
  return {
    title: "Titel",
    content: "Page content",
  };
}
```

### get site data

Can either be site-settings or custom fields of the Info page. To be used in html head and on both pages, so it would be best to fetch this only once.

```js
function getSiteData(id) {
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
      country: "Germany",
    },
    image: "image-1000x1000px.jpg",
  };
}
```

## Routing

- `/` home
- `/info` info
- `/imprint` imprint
- `/archive` posts (not actually a worpress page)
- `/archive/my-first-post` single post

## routify-starter

This repository is based on [routify-starter](https://github.com/roxiness/routify-starter). Visit their repo for more information.
