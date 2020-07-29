<script>
  import { getContext } from "svelte";

  let posts = {};
  let api = getContext("robinApi");

  api.getPostsData((result) => {
    posts = result;
  });
</script>

<h2>Posts Component</h2>
<ul>
  {#if Object.keys(posts) != 0}
    {#each posts as post}
      <li>{post.id} {post.title} {post.content}</li>
    {/each}
  {:else}
    <li>Loading Posts</li>
  {/if}
</ul>
