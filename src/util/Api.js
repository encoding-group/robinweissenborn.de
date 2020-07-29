import axios from "axios";

export default class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getPosts(callback) {
    axios.get("http://robin.test/wp-json/wp/v2/posts").then((response) => {
      let imageObject = {
        small: "image-600.jpg",
        medium: "image-900.jpg",
        large: "image-1600.jpg",
        full: "image-2000.jpg",
        width: 2000,
        height: 1300,
        caption: "Alt text", // image alt text
      };
      const fakeData = [
        {
          url: "url",
          title: "Very long and original project title",
          titleShort: "Title", // custom text field
          year: 2019,
          image: imageObject,
          client: "Kunde", // category
          discipline: "Poster", // tag
        },
        {
          url: "url",
          title: "Very long and original project title",
          titleShort: "Title", // custom text field
          year: 2019,
          image: imageObject,
          client: "Kunde", // category
          discipline: "Poster", // tag
        },
      ];
      callback(fakeData);
    });
  }
}
