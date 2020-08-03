<script>
  import { params } from "@sveltech/routify";
  import { getContext } from "svelte";

  import Navigation from "../_components/Navigation.svelte";
  import Gallery from "../_components/Gallery.svelte";
  import Message from "../_components/Message.svelte";

  export let postSlug;

  const wpAdapter = getContext("WordpressAdapter");
</script>

<style type="text/scss">
  :global( nav ) {
    position: fixed !important;
  }
</style>

<Navigation prefix="../.." />

{#await wpAdapter.getPost(postSlug)}
  <Message />
{:then post}
  {(console.log(post), '')}
  <h1>{post.title}</h1>
  <Gallery gallery={post.galleryGrid} />

{:catch error}
  <Message>{error.message}</Message>
{/await}
