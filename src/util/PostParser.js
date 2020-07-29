export default process = (postData) => {
  let imageObject = {
    small: "image-600.jpg",
    medium: "image-900.jpg",
    large: "image-1600.jpg",
    full: "image-2000.jpg",
    width: 2000,
    height: 1300,
    caption: "Alt text", // image alt text
  };
  return {
    url: "url",
    id: postData.id,
    title: postData.title,
    titleShort: "Title", // custom text field
    content: postData.body,
    year: 2019,
    image: imageObject,
    client: "Kunde", // category
    discipline: ["Poster"], // tags
  };
};
