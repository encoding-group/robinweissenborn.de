<script>
  import { params, ready } from "@sveltech/routify";
  import { processPost } from "../../js/wpResponseParser.js";

  import Navigation from "../_components/Navigation.svelte";
  import Gallery from "../_components/Gallery.svelte";
  import Message from "../_components/Message.svelte";
  import Headline from "../_components/Headline.svelte";
  import Product from "../_components/Product.svelte";

  export let postSlug;

  let data;
  $: getData($params.postSlug);
  function getData(slug) {
    fetch(
      `https://api.robinweissenborn.de/wp-json/wp/v2/posts?slug=${slug}&_embed=wp:term`
    )
      .then((response) => response.json())
      .then((json) => {
        data = processPost(json[0]);
        $ready();
      });
  }
</script>

<style type="text/scss">
  main {
    animation: fadein 1s;
    scroll-snap-type: y mandatory;
    max-height: 100vh;
    overflow-y: scroll;
    :global(section) {
      scroll-snap-align: start;
    }
  }
  section.info {
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
  /* .info {
    :global(div) {
      margin-top: 1em;
    }
  } */
  .content {
    :global(p) {
      margin-bottom: 1em;
    }
  }
</style>

<Navigation />

{#if data}
  <main>
    {#each data.galleryGrid as gallery}
      <Gallery {gallery} />
    {/each}

    <section class="info">
      <Headline>
        <h3>Info</h3>
      </Headline>

      <div class="panels">
        <div class="info">
          {#if data.year}
            <p>{data.year}</p>
          {/if}
          {#if data.title}
            <h2>{data.title}</h2>
          {/if}
          {#if data.client}
            <p>{data.client.join(', ')}</p>
          {/if}
          {#if data.discipline}
            <p>{data.discipline.join(', ')}</p>
          {/if}

          <div>
            {@html data.projectInfo}
          </div>

          {#if data.isProduct === true}
            <Product {data} />
          {/if}
        </div>
        <div class="content">
          {#if data.content}
            {@html data.content}
          {/if}
        </div>
      </div>
    </section>
  </main>
{:else}
  <Message />
{/if}
