import axios from "axios";
import { processPost, processPosts, processInfo } from "./wpResponseParser.js";

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
      const response = await axios.get(
        `${this.baseUrl}/posts${this.parameters}`
      );
      return processPosts(response.data);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getPost(slug, callback) {
    callback(await this.getPost(slug));
  }

  async getPost(slug) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/posts?slug=${slug}&_embed=wp:term`
      );
      if (response.data.length == 0)
        throw new Error(`Could not find the post '${slug}'`);
      return processPost(response.data[0]);
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
