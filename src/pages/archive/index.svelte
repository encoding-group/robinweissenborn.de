<script>
  import { onMount } from "svelte";
  import { onDestroy } from "svelte";

  import { url, ready } from "@sveltech/routify";
  import { processPosts } from "../../js/wpResponseParser.js";

  import Navigation from "../_components/Navigation.svelte";
  import Message from "../_components/Message.svelte";

  import GridItem from "../_components/GridItem.svelte";
  import ListItem from "../_components/ListItem.svelte";
  import MixedItem from "../_components/MixedItem.svelte";

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
  .page :global(nav) {
    position: sticky !important;
  }
  .page.panels {
    height: 100vh;
    display: flex;
    flex-direction: column;
    .container {
      flex: 1;
      display: flex;
      .panel {
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
  }
  ul.grid {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<svelte:window on:resize={() => panelsLayout()} />

<div class="page" class:panels>
  <Navigation {panels} />

  <div class="container">
    {#if panels}
      <div class="panel">
        {#if data}
          <ul class="grid">
            {#each data as post}
              <GridItem {post} on:hover={onItemHover} />
            {/each}
          </ul>
        {:else}
          <Message />
        {/if}
      </div>

      <div class="panel">
        {#if data}
          <ul class="list">
            {#each data as post}
              <ListItem {post} hover={hover === post.id} />
            {/each}
          </ul>
        {:else}
          <Message />
        {/if}
      </div>
    {:else if data}
      <ul class="mixed">
        {#each data as post}
          <MixedItem {post} />
        {/each}
      </ul>
    {:else}
      <Message />
    {/if}
  </div>
</div>
