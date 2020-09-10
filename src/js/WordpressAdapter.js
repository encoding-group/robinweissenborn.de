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

  async getPosts(callback) {
    callback(await this.getPosts());
  }

  async getPosts() {
    try {
      if (isCacheStale("posts_cache")) {
        console.log("new");
        const response = await axios.get(
          `${this.baseUrl}/posts${this.parameters}&per_page=40`
        );
        refreshCache("posts_cache", response.data);
        return processPosts(response.data);
      } else {
        console.log("cache");
        return processPosts(getCache("posts_cache"));
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getPost(slug, callback) {
    callback(await this.getPost(slug));
  }

  async getPost(slug) {
    try {
      if (isCacheStale(`post_cache_${slug}`)) {
        const response = await axios.get(
          `${this.baseUrl}/posts?slug=${slug}&_embed=wp:term`
        );
        if (response.data.length == 0)
          throw new Error(`Could not find the post '${slug}'`);
        refreshCache(`post_cache_${slug}`, response.data[0]);
        return processPost(response.data[0]);
      } else {
        return processPost(getCache(`post_cache_${slug}`));
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getPage(slug, callback) {
    callback(await this.siteData(slug));
  }

  async getPage(slug) {
    try {
      const response = await axios.get(`${this.baseUrl}/pages?slug=${slug}`);
      if (response.data.length === 0)
        throw new Error(`Could not find the page '${slug}'`);
      return processInfo(response.data[0]);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
