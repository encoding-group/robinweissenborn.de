function processInfo(pageData) {
  let info = {};
  if (pageData.hasOwnProperty("acf")) {
    info.info = pageData.acf.hasOwnProperty("info") ? pageData.acf.info : "";
    info.officeName = pageData.acf.hasOwnProperty("office_name")
      ? pageData.acf.office_name
      : "";
    info.service = pageData.acf.hasOwnProperty("service")
      ? pageData.acf.service
      : "";
  }
  return {
    ...info,
    ...processBasicFields(pageData),
    ...processMetaFields(pageData),
    ...processContactFields(pageData),
  };
}

function processPosts(postsArray) {
  return postsArray
    .map((post) => processPost(post))
    .sort((a, b) => b.year - a.year);
}

function processPost(postData) {
  if (!postData) return {};
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
      };
    }

    if (postData.acf.hasOwnProperty("address-1")) {
      result["address-1"] = {
        street: postData.acf["address-1"].street,
        zip: postData.acf["address-1"].zip_code,
        city: postData.acf["address-1"].city,
        country: postData.acf["address-1"].country,
      };
    }

    if (postData.acf.hasOwnProperty("address-2")) {
      result["address-2"] = {
        street: postData.acf["address-2"].street,
        zip: postData.acf["address-2"].zip_code,
        city: postData.acf["address-2"].city,
        country: postData.acf["address-2"].country,
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
      discipline: categories.map((category) =>
        category.name === "Uncategorized" ? "" : category.name
      ),
      client: tags.map((tag) => tag.name),
    };
  }

  return {};
}

function processAcfFields(postData) {
  if (postData.hasOwnProperty("acf")) {
    let result = {
      ...processProductFields(postData),
      ...processGalleryGrid(postData),
      titleImage: processImage(postData.acf.title_image),
      year: parseInt(postData.acf.year, 10),
    };

    if (postData.acf.hasOwnProperty("project_info")) {
      result.projectInfo = postData.acf.project_info;
    }

    if (postData.acf.hasOwnProperty("is_frameless")) {
      result.isFrameless = postData.acf.is_frameless;
    }

    if (postData.acf.hasOwnProperty("color")) {
      result.color = postData.acf.color;
    }

    if (postData.acf.secondary_title_image) {
      result.secondaryTitleImage = processImage(
        postData.acf.secondary_title_image
      );
    }
    return result;
  }

  return {};
}

function processProductFields(postData) {
  if (
    postData.acf.hasOwnProperty("is_product") &&
    postData.acf.is_product == true
  ) {
    let result = {
      isProduct: true,
    };

    if (postData.acf.hasOwnProperty("product_info")) {
      result.productInfo = postData.acf.product_info;
    }

    if (postData.acf.hasOwnProperty("price")) result.price = postData.acf.price;

    return result;
  }

  return { isProduct: false };
}

function processGallerySlide( slide ){
  
  let type = slide.select;
  let media;

  if( type === 'Image' ){
    media = processImage(slide.image);
  } else if ( type === 'Video URL' ){
    media = slide.embedded_media;
  } else if ( type === 'HTML' ){
    media = slide.html;
  } else {
    type = undefined;
  }

  return { type, media };
}

function processGalleryRow( row ){
  return {
    headline: row.headline,
    media: row.media.map( processGallerySlide ),
  };
}

function processGalleryGrid(postData) {
  if (!postData.acf.hasOwnProperty("2d_gallery")) {
    return {};
  }
  if (typeof postData.acf["2d_gallery"] !== "object") {
    return {};
  }
  return {
    galleryGrid: postData.acf["2d_gallery"].map( processGalleryRow ),
  };
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
    title: imageObject.title,
    alt: imageObject.alt,
    caption: imageObject.caption,
    description: imageObject.description,
    srcset: createSrcString(imageObject),
    sizes: createSrcSizes(),
  };
}

function createSrcString(imageObject) {
  return [
    `${imageObject.sizes.thumbnail} 500w`,
    `${imageObject.sizes.medium} 1000w`,
    `${imageObject.sizes.large} 2000w`,
    `${imageObject.sizes.huge} 3000w`,
  ].join(",");
}

// Needs more work
function createSrcSizes() {
  return [
    "(max-width: 500px) 500px",
    "(max-width: 1000px) 1000px",
    "(max-width: 2000px) 2000px",
    "(max-width: 3000px) 3000px",
  ].join(",");
}

export { processPost, processPosts, processInfo };
