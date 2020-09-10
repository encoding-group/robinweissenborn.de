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
  main {
    animation: fadein 1s;
  }
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
  .info {
    :global(div) {
      margin-top: 1em;
    }
  }
  .content {
    :global(p) {
      margin-bottom: 1em;
    }
  }
</style>

<Navigation />

{#await wpAdapter.getPost(postSlug)}
  <Message />
{:then post}
  {(console.log(post), '')}

  <main>
    <Gallery gallery={post.galleryGrid} />

    <article>
      <Headline>
        <h3>Info</h3>
      </Headline>

      <div class="panels">
        <div class="info">
          {#if post.year}
            <p>{post.year}</p>
          {/if}
          {#if post.title}
            <h2>{post.title}</h2>
          {/if}
          {#if post.client}
            <p>{post.client.join(', ')}</p>
          {/if}
          {#if post.discipline}
            <p>{post.discipline.join(', ')}</p>
          {/if}

          <div>
            {@html post.projectInfo}
          </div>

          {#if post.isProduct === true}
            <Product {post} />
          {/if}
        </div>
        <div class="content">
          {#if post.content}
            {@html post.content}
          {/if}
        </div>
      </div>
    </article>
  </main>
{:catch error}
  <Message>{error.message}</Message>
{/await}
