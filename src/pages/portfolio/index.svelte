<script>
  import { getContext } from "svelte";

  const client = getContext("WordpressAdapter");
  let posts = [];
  client.getPostsData((result) => (posts = result));
</script>

<style>
  .post {
    margin: 2rem;
    padding: 1rem;
    border: 1px solid black;
  }
</style>

<h1>Portfolio</h1>
<ul>
  {#if posts.length != 0}
    {#each posts as post}
      <li class="post">
        <h3>{post.title}</h3>
        <p>Client: {post.client.join(', ')}</p>
        <p>Discipline: {post.discipline.join(', ')}</p>
      </li>
    {/each}
  {:else}
    <li class="post">Loading posts...</li>
  {/if}
</ul>
