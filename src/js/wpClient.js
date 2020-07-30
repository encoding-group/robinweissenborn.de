import axios from "axios";
import { processPost, processPosts } from "./wpResponseParser.js";

export default class WpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.parameters = "?_embed=wp:term";
  }

  getPostsData(callback) {
    axios
      .get(`${this.baseUrl}/posts${this.parameters}`)
      .then((response) => callback(processPosts(response.data)))
      .catch((error) => console.log(error));
  }

  getPostData(id, callback) {
    axios
      .get(`${this.baseUrl}/posts/${id}${this.parameters}`)
      .then((response) => callback(processPost(response.data)))
      .catch((error) => console.log(error));
  }

  getPageData(id, callback) {
    axios
      .get(`${this.baseUrl}/pages/${id}`)
      .then((response) => callback(processPage(response.data)))
      .catch((error) => console.log(error));
  }

  getSiteData(callback) {
    axios
      .get(`${this.baseUrl}/posts`)
      .then((response) => callback(processPosts(response.data)))
      .catch((error) => console.log(error));
  }
}
