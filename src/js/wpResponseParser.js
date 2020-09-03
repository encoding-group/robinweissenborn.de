function processInfo(pageData) {
  return {
    ...processBasicFields(pageData),
    ...processMetaFields(pageData),
    ...processContactFields(pageData),
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
    featured: postData.sticky,
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

function processContactFields(postData) {
  if (postData.hasOwnProperty("acf")) {
    let result = {};

    if (postData.acf.hasOwnProperty("contact")) {
      result.contact = {
        person: `${postData.acf.contact.first_name} ${postData.acf.contact.last_name}`,
        email: postData.acf.contact.email,
        tel: postData.acf.contact.phone_number,
        street: postData.acf.contact.street,
        zip: postData.acf.contact.zip_code,
        city: postData.acf.contact.city,
        country: postData.acf.contact.country,
      };
    }

    if (postData.acf.hasOwnProperty("secondary_contact")) {
      result.secondary_contact = {
        person: `${postData.acf.secondary_contact.first_name} ${postData.acf.secondary_contact.last_name}`,
        email: postData.acf.secondary_contact.email,
        tel: postData.acf.secondary_contact.phone_number,
        street: postData.acf.secondary_contact.street,
        zip: postData.acf.secondary_contact.zip_code,
        city: postData.acf.secondary_contact.city,
        country: postData.acf.secondary_contact.country,
      };
    }
    return result;
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
      titleImage: processImage(postData.acf.title_image),
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
      galleryGrid: postData.acf["2d_gallery"].map((row) => {
        return {
          headline: row.headline,
          media: row.media.map((column) => {
            return {
              type: column.select,
              media:
                column.select === "Image"
                  ? processImage(column.image)
                  : column.video_url,
            };
          }),
        };
      }),
    };
  }

  return {};
}

function processImage(imageObject) {
  if (!imageObject) return {};
  return {
    small: imageObject.sizes.thumbnail,
    smallWidth: imageObject.sizes["thumbnail-width"],
    smallHeight: imageObject.sizes["thumbnail-height"],
    medium: imageObject.sizes.medium,
    mediumWidth: imageObject.sizes["medium-width"],
    mediumHeight: imageObject.sizes["medium-height"],
    large: imageObject.sizes.large,
    largeWidth: imageObject.sizes["large-width"],
    largeHeight: imageObject.sizes["large-height"],
    full: imageObject.url,
    fullWidth: imageObject.width,
    fullHeight: imageObject.height,
    caption: imageObject.caption,
  };
}

export { processPost, processPosts, processInfo };
