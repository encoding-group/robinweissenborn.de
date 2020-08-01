<script>
  import { params } from "@sveltech/routify";
  import { getContext } from "svelte";

  export let postSlug;

  let post = {};
  const wpAdapter = getContext("WordpressAdapter");
  wpAdapter.getPostBySlug(postSlug, (result) => (post = result));
</script>

{#if Object.keys(post).length !== 0}
  <h1>{post.title}</h1>
{:else}
  <p>Loading post...</p>
{/if}
