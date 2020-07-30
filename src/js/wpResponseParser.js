function processPosts(postsArray) {
  return postsArray.map((post) => processPost(post));
}

function processPost(postData) {
  let result = {};
  Object.assign(result, processEmbeddedFields(postData));
  Object.assign(result, processAcfFields(postData));
  Object.assign(result, {
    id: postData.id,
    title: postData.title.rendered,
    content: postData.content.rendered,
  });
  return result;
}

function processEmbeddedFields(postData) {
  if (postData.hasOwnProperty("_embedded")) {
    const [categories, tags] = postData._embedded["wp:term"];
    return {
      client: categories.map((category) => category.name),
      discipline: tags.map((tag) => tag.name),
    };
  } else {
    return {};
  }
}

function processAcfFields(postData) {
  if (postData.hasOwnProperty("acf")) {
    const [day, month, year] = postData.acf.year.split(".");
    let result = {};
    Object.assign(result, processProductFields(postData));
    Object.assign(result, processGalleryFields(postData));
    Object.assign(result, {
      titleShort: postData.acf.short_title,
      year: new Date(year, month - 1, day),
    });
    return result;
  } else {
    return {};
  }
}

function processProductFields(postData) {
  if (
    postData.acf.hasOwnProperty("is_product") &&
    postData.acf.is_product == true
  ) {
    return {
      info: postData.acf.product_info,
      price: postData.acf.price,
    };
  } else {
    return {};
  }
}

function processGalleryFields(postData) {
  if (postData.acf.hasOwnProperty("2d_gallery")) {
    let rows = [];
    for (const row of postData.acf["2d_gallery"]) {
      let columns = [];
      for (const column of row.media) {
        columns.push({
          type: column.select,
          url: column.image || column.video_url,
        });
      }
      rows.push(columns);
    }
    return {
      gallery: rows,
    };
  } else {
    return {};
  }
}

export { processPost, processPosts };
