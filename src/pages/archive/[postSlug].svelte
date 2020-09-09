<script>
  import { params } from "@sveltech/routify";
  import { getContext } from "svelte";

  import Navigation from "../_components/Navigation.svelte";
  import Gallery from "../_components/Gallery.svelte";
  import Message from "../_components/Message.svelte";
  import Headline from "../_components/Headline.svelte";
  import Product from "../_components/Product.svelte";

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
    > div {
      margin: 0 1.5rem 1.5rem;
    }
    @media only screen and (min-width: 600px) {
      margin: 0 1.5rem;
      > div {
        margin: 0 1.5rem 1.5rem 0;
      }
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @media only screen and (min-width: 920px) {
      margin: 0 25vw;
    }
  }
</style>

<Navigation />

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

        {#if post.isProduct === true}
          <Product {post} />
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
