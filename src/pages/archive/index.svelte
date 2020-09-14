<script>
  import { onMount } from "svelte";
  import { onDestroy } from "svelte";

  import { getContext } from "svelte";
  import { url, ready } from "@sveltech/routify";

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

  const wpAdapter = getContext("WordpressAdapter");
  let data;
  $: getData();
  function getData() {
    wpAdapter.getPosts().then((json) => {
      data = json;
      $ready();
    });
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
              <GridItem {post} />
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
              <ListItem {post} />
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
