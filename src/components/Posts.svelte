<script>
  import axios from "axios";
  import Api from "../util/Api.js";
  let api = new Api("http://robin.test/wp-json/wp/v2/");
  let posts = {};
  api.getPosts((result) => {
    posts = result;
  });
</script>

<h2>Posts Component</h2>
<ul>
  {#if posts}
    {#each posts as post}
      <li>{post.title}</li>
    {/each}
  {/if}
</ul>
