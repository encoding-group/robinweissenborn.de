import axios from "axios";
import fs from "fs";
import convert from "xml-js";

function makeUrl(data) {
  return {
    loc: data.link.replace(/api\.robinweissenborn/, "robinweissenborn"),
    changefreq: "monthly",
    priority: "0.5",
  };
}

function apiLinks(baseUrl) {
  return axios.get(baseUrl).then((response) => {
    const links = response.data.map((post) => {
      return makeUrl(post);
    });
    return links;
  });
}

async function data() {
  const options = { compact: true, ignoreComment: true, spaces: 4 };
  let url = [
    makeUrl({ link: "https://robinweissenborn.de" }),
    makeUrl({ link: "https://robinweissenborn.de/info" }),
    makeUrl({ link: "https://robinweissenborn.de/imprint" }),
    makeUrl({ link: "https://robinweissenborn.de/archive" }),
    ...(await apiLinks(
      "https://api.robinweissenborn.de/wp-json/wp/v2/posts?_fields=link,acf.title_image.url"
    )),
  ];

  const data = {
    _declaration: {
      _attributes: {
        version: "1.0",
        encoding: "utf-8",
      },
    },
    urlset: {
      _attributes: {
        xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9",
        "xmlns:image": "http://www.google.com/schemas/sitemap-image/1.1",
      },
      url,
    },
  };
  return convert.json2xml(data, options);
}

export default function linkList({ distDir }) {
  return {
    name: "LinkList",
    async buildStart(options) {
      fs.writeFile(distDir + "/sitemap.xml", await data(), function (err) {
        if (err) throw err;
        console.log("Created Sitemap.");
      });
    },
  };
}
