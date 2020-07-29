<script>
  import { getContext } from "svelte";

  let posts = {};
  let api = getContext("robinApi");

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
  {:else}
    <li>Loading Posts</li>
  {/if}
</ul>
