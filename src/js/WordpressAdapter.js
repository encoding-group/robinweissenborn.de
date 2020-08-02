import axios from "axios";
import { processPost, processPosts, processInfo } from "./wpResponseParser.js";

export default class WordpressAdapter {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.parameters = "?_embed=wp:term";
  }

  getPostsData(callback) {
    this.posts()
      .then((posts) => callback(posts))
      .catch((error) => console.log(error));
  }

  posts() {
    return axios
      .get(`${this.baseUrl}/posts${this.parameters}`)
      .then((response) => processPosts(response.data));
  }

  getPostData(id, callback) {
    this.post(id)
      .then((post) => callback(post))
      .catch((error) => console.log(error));
  }

  post(id) {
    return axios
      .get(`${this.baseUrl}/posts/${id}${this.parameters}`)
      .then((response) => processPost(response.data));
  }

  getPostBySlug(slug, callback) {
    this.postBySlug(slug)
      .then((post) => callback(post))
      .catch((error) => console.log(error));
  }

  postBySlug(slug) {
    return axios
      .get(`${this.baseUrl}/posts?slug=${slug}`)
      .then((response) => processPost(response.data[0]));
  }

  getPageData(id, callback) {
    this.page(id)
      .then((page) => callback(page))
      .catch((error) => console.log(error));
  }

  page(id) {
    return axios
      .get(`${this.baseUrl}/pages/${id}`)
      .then((response) => processPage(response.data));
  }

  getSiteData(callback) {
    this.siteData()
      .then((site) => callback(site))
      .catch((error) => console.log(error));
  }

  siteData() {
    return axios
      .get(`${this.baseUrl}/pages/34`) // TODO: Find better way to set infopage endpoint; get rid of magic number
      .then((response) => processInfo(response.data));
  }
}
