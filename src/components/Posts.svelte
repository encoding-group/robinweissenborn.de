<script>
  import axios from "axios";
  let posts = {};
  axios.get("http://robin.test/wp-json/wp/v2/posts").then((response) => {
    posts = response.data;
    console.log(posts);
  });
</script>

<h2>Posts Component</h2>
<ul>
  {#each posts as post}
    <li>{post.title.rendered}</li>
  {/each}
</ul>
