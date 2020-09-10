<script>
  import { onMount } from 'svelte';
  import { onDestroy } from 'svelte';

  import { getContext } from "svelte";
  import { url } from "@sveltech/routify";

  import Navigation from "../_components/Navigation.svelte";
  import Message from "../_components/Message.svelte";

  import PostsList from "../_components/PostsList.svelte";
  import PostsGrid from "../_components/PostsGrid.svelte";
  import PostsGridList from "../_components/PostsGridList.svelte";

  const wpAdapter = getContext("WordpressAdapter");

  let panels = false;
  function panelsLayout(){
    panels = window.innerWidth >= 840;
    return panels;
  }
  panelsLayout();

  let data = wpAdapter.getPosts();

</script>

<svelte:window on:resize={() => panelsLayout()}/>

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
</style>

<div class="page" class:panels>

  <Navigation {panels} />

  <div class="container">

    {#if panels}

      <div class="panel">
        {#await data}
          <Message />
        {:then posts}
          <PostsGrid {posts} />
        {:catch error}
          <Message>{error.message}</Message>
        {/await}
      </div>

      <div class="panel">
        {#await data}
          <Message />
        {:then posts}
          <PostsList {posts} />
        {:catch error}
          <Message>{error.message}</Message>
        {/await}
      </div>

    {:else}

      {#await data}
        <Message />
      {:then posts}
        <PostsGridList {posts} />
      {:catch error}
        <Message>{error.message}</Message>
      {/await}

    {/if}

  </div>

</div>
