<script>
  import { getContext } from "svelte";

  import StickyPost from "./_components/StickyPost.svelte";

  const wpAdapter = getContext("WordpressAdapter");
</script>

<style type="text/scss">
  :global( nav ){
    position: fixed !important;
  }
</style>

<ul>
  {#await wpAdapter.getPosts()}
    <li>Loading posts...</li>
  {:then posts}
    {(console.log(posts), '')}
    {#each posts as post}
      <!-- only show sticky posts -->

      <StickyPost {post} />

    {/each}
  {:catch error}
    <li class="post">Could not find any posts.</li>
  {/await}
</ul>
