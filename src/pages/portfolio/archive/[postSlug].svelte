<script>
  import { params } from "@sveltech/routify";
  import { getContext } from "svelte";

  import Message from "../_components/Message.svelte";

  export let postSlug;

  const wpAdapter = getContext("WordpressAdapter");
</script>

<style type="text/scss">
  /*
  navigation should be fixed on post page
  nav {
    position: fixed !important;
  } */
</style>

{#await wpAdapter.getPost(postSlug)}
  <Message />
{:then post}
  {(console.log(post), '')}

  <h1>{post.title}</h1>

{:catch error}
  <Message>{error.message}</Message>
{/await}
