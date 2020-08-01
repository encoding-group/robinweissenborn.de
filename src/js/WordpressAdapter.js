import axios from "axios";
import { processPost, processPosts, processInfo } from "./wpResponseParser.js";

export default class WordpressAdapter {
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
      .get(`${this.baseUrl}/pages/34`) // TODO: Find better way to set infopage endpoint; get rid of magic number
      .then((response) => callback(processInfo(response.data)))
      .catch((error) => console.log(error));
  }
}
