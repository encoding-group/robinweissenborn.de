function processInfo(pageData) {
  console.log(pageData);
  return {
    ...processBasicFields(pageData),
    ...processMetaFields(pageData),
  };
}

function processPosts(postsArray) {
  return postsArray.map((post) => processPost(post));
}

function processPost(postData) {
  return {
    ...processBasicFields(postData),
    ...processEmbeddedFields(postData),
    ...processAcfFields(postData),
  };
}

function processBasicFields(postData) {
  return {
    id: postData.id,
    slug: postData.slug,
    title: postData.title.rendered,
    content: postData.content.rendered,
  };
}

function processMetaFields(postData) {
  if (
    postData.hasOwnProperty("acf") &&
    postData.acf.hasOwnProperty("general")
  ) {
    return {
      title: postData.acf.general.title,
      keywords: postData.acf.general.keywords.split(/,\s/),
      description: postData.acf.general.description,
      image: {
        url: postData.acf.general.image.sizes.large,
        width: postData.acf.general.image.sizes["large-width"],
        height: postData.acf.general.image.sizes["large-height"],
      },
    };
  }

  return {};
}

function processEmbeddedFields(postData) {
  if (postData.hasOwnProperty("_embedded")) {
    const [categories, tags] = postData._embedded["wp:term"];
    return {
      client: categories.map((category) => category.name),
      discipline: tags.map((tag) => tag.name),
    };
  }

  return {};
}

function processAcfFields(postData) {
  if (postData.hasOwnProperty("acf")) {
    const [day, month, year] = postData.acf.year.split(".");
    return {
      ...processProductFields(postData),
      ...processGalleryGrid(postData),
      titleShort: postData.acf.short_title,
      // year: new Date(year, month - 1, day),
      year: parseInt(year, 10),
    };
  }

  return {};
}

function processProductFields(postData) {
  if (
    postData.acf.hasOwnProperty("is_product") &&
    postData.acf.is_product == true
  ) {
    return {
      isProduct: true,
      productInfo: postData.acf.product_info,
      price: parseFloat(postData.acf.price),
    };
  }

  return { isProduct: false };
}

function processGalleryGrid(postData) {
  if (postData.acf.hasOwnProperty("2d_gallery")) {
    return {
      galleryGrid: postData.acf["2d_gallery"].map((row) =>
        row.media.map((column) => {
          return {
            type: column.select,
            url: column.image || column.video_url,
          };
        })
      ),
    };
  }

  return {};
}

export { processPost, processPosts, processInfo };
