export default class WpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getPostsData(callback) {
    callback([{ title: "test title" }]);
  }
}
