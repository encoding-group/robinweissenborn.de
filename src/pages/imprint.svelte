<script>
  import { metatags, ready } from "@sveltech/routify";
  import { processInfo } from "../js/wpResponseParser.js";

  import Loading from "./_components/Loading.svelte";

  metatags.title = "Imprint | Robin Weißenborn";

  let data = { content: "" };
  $: getData();
  function getData() {
    fetch("https://api.robinweissenborn.de/wp-json/wp/v2/pages?slug=imprint")
      .then((response) => response.json())
      .then((json) => {
        data = processInfo(json[0]);
        $ready();
      })
      .catch((err) => console.log(err));
  }
</script>

<style type="text/scss">
  main {
    animation: fadein 1s;
  }
  .panels {
    padding: 3.8rem 1.5rem 1.5rem;
  }
  @media only screen and (min-width: 640px) {
    .panels {
      display: flex;
      flex-wrap: wrap;
      section {
        flex: 0 0 50%;
        &.about + .about {
          margin-left: 50%;
        }
      }
    }
    .imprint {
      position: fixed;
      bottom: 0;
      left: 0;
    }
  }
  @media only screen and (min-width: 920px) {
    .panels {
      flex-wrap: nowrap;
      padding-top: 1.5rem;
      section {
        flex-basis: 25%;
        padding-left: 1em;
        &.col-1 {
          margin-left: 12.5%;
        }
      }
    }
  }
  main {
    :global(h1) {
      margin-bottom: 1em;
    }
    :global(h2) {
      margin-bottom: 1em;
    }
    :global(h3) {
      margin-bottom: 1em;
    }
    :global(p + h2) {
      margin-top: 2em;
    }
    :global(p + h3) {
      margin-top: 2em;
    }
    :global(p) {
      margin-bottom: 1em;
    }
  }

</style>

{#if data}
  <main class="panels">

    <section class="col-1">
      <h1>{data.title}</h1>
      {@html data.content}
    </section>

    <section class="col-2">
      Platzhalter Spalte 2
    </section>

    <section class="col-3">
      Platzhalter Spalte 3
    </section>

  </main>
{:else}
  <Loading />
{/if}
