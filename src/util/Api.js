import axios from "axios";

export default class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getPosts(callback) {
    axios.get("http://robin.test/wp-json/wp/v2/posts").then((response) => {
      const fakeData = [
        {
          url: "url",
          title: "Very long and original project title",
          titleShort: "Title", // custom text field
          year: 2019,
          image: "",
          client: "Kunde", // category
          discipline: "Poster", // tag
        },
        {
          url: "url",
          title: "Very long and original project title",
          titleShort: "Title", // custom text field
          year: 2019,
          image: "",
          client: "Kunde", // category
          discipline: "Poster", // tag
        },
      ];
      callback(fakeData);
    });
  }
}
