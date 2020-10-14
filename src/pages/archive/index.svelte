<script>
  import { onMount } from "svelte";
  import { onDestroy } from "svelte";

  import { metatags, url, ready } from "@sveltech/routify";
  import { processPosts } from "../../js/wpResponseParser.js";

  import Navigation from "../_components/Navigation.svelte";
  import NavigationArchive from "../_components/NavigationArchive.svelte";

  import Loading from "../_components/Loading.svelte";

  import GridItem from "../_components/GridItem.svelte";
  import ListItem from "../_components/ListItem.svelte";
  import MixedItem from "../_components/MixedItem.svelte";

  metatags.title = "Archive | Robin Weißenborn";

  let panels = false;
  function panelsLayout() {
    panels = window.innerWidth >= 840;
    return panels;
  }
  panelsLayout();

  let data;
  $: getData();
  function getData() {
    fetch(
      "https://api.robinweissenborn.de/wp-json/wp/v2/posts?per_page=100&_embed=wp:term"
    )
      .then((response) => response.json())
      .then((json) => {
        data = processPosts(json);
        $ready();
      })
      .catch((err) => console.log(err));
  }

  let hover = false;
  function onItemHover(event) {
    hover = event.detail;
  }
</script>

<style type="text/scss">
  main {
    width: 100vw;
  }
  main.panels {
    height: 100vh;
    position: fixed;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .panels {
      flex: 1;
      display: flex;
      section {
        animation: fadein 1s;
        flex: 1 1 50%;
        height: 100%;
        overflow-y: auto;
        &:first-child {
          border-right: $border;
        }
      }
    }
  }
  ul {
    -webkit-user-select: none;
    user-select: none;
    &.grid {
      display: flex;
      flex-wrap: wrap;
    }
    &.mixed {
      margin-top: 3.8rem;
    }
  }
</style>

<svelte:window on:resize={() => panelsLayout()} />

<main class:panels>

  {#if panels}

    <NavigationArchive />

    <div class="panels">
      <section>
        {#if data}
          <ul class="grid">
            {#each data as post}
              <GridItem {post} on:hover={onItemHover} />
            {/each}
          </ul>
        {:else}
          <Loading />
        {/if}

      </section>
      <section>
        {#if data}
          <ul class="list">
            {#each data as post}
              <ListItem {post} hover={hover === post.id} />
            {/each}
          </ul>
        {:else}
          <Loading />
        {/if}
      </section>
    </div>

  {:else if data}

    <Navigation />
    <ul class="mixed">
      {#each data as post}
        <MixedItem {post} />
      {/each}
    </ul>

  {:else}
    <Loading />
  {/if}

</main>
