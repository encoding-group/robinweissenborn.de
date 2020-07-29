import axios from "axios";
import process from "./PostParser.js";

export default class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getPostsData(callback) {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      callback(response.data.map((post) => process(post)));
    });
  }

  getPostData(id, callback) {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        callback(process(response.data));
      });
  }

  getPageData(id) {
    return {
      title: "Titel",
      content: "Page content",
    };
  }

  getSiteData(id) {
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
}
