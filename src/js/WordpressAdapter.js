import axios from "axios";
import { processPost, processPosts, processInfo } from "./wpResponseParser.js";

function isCacheStale(key) {
  const cacheTimestamp = sessionStorage.getItem(`${key}_timestamp`);
  if (!cacheTimestamp) {
    return true;
  }
  if (cacheTimestamp > Date.now()) {
    return false;
  }
  return true;
}

function refreshCache(key, data) {
  sessionStorage.setItem(`${key}_timestamp`, Date.now() + 15 * 60 * 1000);
  sessionStorage.setItem(key, JSON.stringify(data));
}

function getCache(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

export default class WordpressAdapter {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.parameters = "?_embed=wp:term";
  }

  async getPosts() {
    if (isCacheStale("posts_cache")) {
      return axios
        .get(`${this.baseUrl}/posts${this.parameters}&per_page=40`)
        .then((res) => {
          refreshCache("posts_cache", res.data);
          return processPosts(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      return processPosts(getCache("posts_cache"));
    }
  }

  async getPost(slug) {
    if (isCacheStale(`post_cache_${slug}`)) {
      return axios
        .get(`${this.baseUrl}/posts?slug=${slug}&_embed=wp:term`)
        .then((res) => {
          refreshCache(`post_cache_${slug}`, res.data[0]);
          return processPost(res.data[0]);
        })
        .catch((err) => console.log(err));
    } else {
      return processPost(getCache(`post_cache_${slug}`));
    }
  }

  async getPage(slug) {
    if (isCacheStale(`page_cache_${slug}`)) {
      return axios
        .get(`${this.baseUrl}/pages?slug=${slug}`)
        .then((res) => {
          refreshCache(`page_cache_${slug}`, res.data[0]);
          return processInfo(res.data[0]);
        })
        .catch((err) => console.log(err));
    } else {
      return processInfo(getCache(`page_cache_${slug}`));
    }
  }
}
