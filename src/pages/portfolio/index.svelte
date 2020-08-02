<script>
  import { getContext } from "svelte";
  import { asEuro } from "../../js/utility.js";

  const wpAdapter = getContext("WordpressAdapter");
</script>

<style type="text/scss">
  .post {
    margin: 2rem;
    padding: 1rem;
    border: $border;
  }
</style>

<ul>
  {#await wpAdapter.posts()}
    <li>Loading posts...</li>
  {:then posts}
    {(console.log(posts), '')}
    {#each posts as post}
      <li class="post">
        <h3>{post.title}</h3>
        <p>Client: {post.client.join(', ')}</p>
        <p>Discipline: {post.discipline.join(', ')}</p>

        <!-- Product information should probably go into a separat component -->
        {#if post.isProduct}
          <p>Product Info: {post.productInfo}</p>
          <p>Price: {asEuro(post.price)}</p>
        {/if}
      </li>
    {/each}
  {:catch error}
    <li class="post">Could not find any posts.</li>
  {/await}
</ul>
