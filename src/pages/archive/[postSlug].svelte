<script>
  import { metatags, params, ready } from "@sveltech/routify";
  import { processPost } from "../../js/wpResponseParser.js";

  import Navigation from "../_components/Navigation.svelte";
  import Gallery from "../_components/Gallery.svelte";
  import Loading from "../_components/Loading.svelte";
  import Headline from "../_components/Headline.svelte";
  import Product from "../_components/Product.svelte";

  export let postSlug;

  let data;
  $: getData(postSlug);
  function getData(slug) {
    fetch(
      `https://api.robinweissenborn.de/wp-json/wp/v2/posts?slug=${slug}&_embed=wp:term`
    )
      .then((response) => response.json())
      .then((json) => {
        data = processPost(json[0]);
        $ready();
        return { data };
      })
      .catch((error) => {
        console.log(error);
        return { statusCode: 500, msg: error.message };
      });
  }

  $: if (data) {
    metatags.title = `${data.title} | Robin Weißenborn`;
  }
</script>

<style type="text/scss">
  @supports (scroll-snap-type: y mandatory) {
    main {
      scroll-snap-type: y mandatory;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow-y: scroll;
      scroll-behavior: smooth;
      :global( section ) {
        scroll-snap-align: start;
      }
    }
  }
  main {
    animation: fadein 1s;
  }
  section.info {
    min-height: 100vh;
    padding-top: 4rem;
  }
  .panels {
    > div {
      margin: 0 1.5rem;
      padding-bottom: 0.4rem;
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
  .content {
    :global(p) {
      margin-bottom: 1.1em;
    }
  }
  .info {
    div {
      margin-bottom: 1.1em;
    }
  }
</style>

<Navigation center={true}>
  {#if data}
    <h1><a href="#project-info" title="Scroll down to project info">{data.title}</a></h1>
  {/if}
</Navigation>

{#if data}

  <main>
    {#each data.galleryGrid as gallery}
      <Gallery {gallery} />
    {/each}

    <section class="info" id="project-info">
      <div class="panels">
        <div class="info">
          <div>
            {#if data.title}
              <h2>{data.title}</h2>
            {/if}
            {#if data.client}
              <p>{data.client.join(', ')}</p>
            {/if}
            {#if data.discipline}
              <p>{data.discipline.join(', ')}</p>
            {/if}
            {#if data.year}
              <p>{data.year}</p>
            {/if}
          </div>

          <div>
            {@html data.projectInfo}
          </div>

          {#if data.isProduct === true}
            <Product post={data} />
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
  <Loading />
{/if}
