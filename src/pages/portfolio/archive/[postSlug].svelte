<script>
  import { params } from "@sveltech/routify";
  import { getContext } from "svelte";

  export let postSlug;

  const wpAdapter = getContext("WordpressAdapter");
</script>

{#await wpAdapter.getPost(postSlug)}
  <p>Loading post...</p>
{:then post}
  {(console.log(post), '')}
  <h1>{post.title}</h1>
{:catch error}
  <p>{error.message}</p>
{/await}
