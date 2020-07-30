<script>
  import { getContext } from "svelte";

  const client = getContext("wpClient");
  let posts = [];
  client.getPostsData((result) => (posts = result));
</script>

<h1>Portfolio</h1>
<ul>
  {#if posts.length != 0}
    {#each posts as post}
      <li>{post.title}, {post.client}, {post.discipline}</li>
    {/each}
  {:else}
    <li>Loading posts...</li>
  {/if}
</ul>
