<script>
  import { params } from "@sveltech/routify";
  import { getContext } from "svelte";

  import Gallery from "../_components/Gallery.svelte";
  import Message from "../_components/Message.svelte";
  import Headline from "../_components/Headline.svelte";

  export let postSlug;

  const wpAdapter = getContext("WordpressAdapter");
</script>

<style type="text/scss">
  article {
    height: 100vh;
    .headline {
      padding: 1.5rem;
      text-align: center;
    }
  }
  .panels {
    padding: 0 20%;
    display: flex;
    > div {
      flex: 1 0 50%;
      padding: 0.5em;
    }
  }
</style>

{#await wpAdapter.getPost(postSlug)}
  <Message />
{:then post}
  {(console.log(post), '')}

  <Gallery gallery={post.galleryGrid} />

  <article>

    <Headline><h3>Info</h3></Headline>

    <div class="panels">
      <div>
        {#if post.year}
          <p>{post.year}</p>
        {/if}
        {#if post.title}
          <p>{post.title}</p>
        {/if}
        {#if post.client}
          <p>{post.client.join(', ')}</p>
        {/if}
        {#if post.discipline}
          <p>{post.discipline.join(', ')}</p>
        {/if}
      </div>
      <div>
        {#if post.content}
          {@html post.content}
        {/if}
      </div>
    </div>

  </article>

{:catch error}
  <Message>{error.message}</Message>
{/await}
