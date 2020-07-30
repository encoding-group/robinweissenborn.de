function processPost(postData) {
  const [categories, tags] = postData._embedded["wp:term"];
  return {
    id: postData.id,
    title: postData.title.rendered,
    titleShort: "[title short]",
    content: postData.content.rendered,
    client: categories.map((category) => category.name),
    discipline: tags.map((tag) => tag.name),
  };
}

function processPosts(postsArray) {
  return postsArray.map((post) => processPost(post));
}

export { processPost, processPosts };
