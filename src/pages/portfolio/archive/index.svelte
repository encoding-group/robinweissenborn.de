<script>
  import { onMount } from 'svelte';
  import { onDestroy } from 'svelte';

  import { getContext } from "svelte";
  import { url } from "@sveltech/routify";

  import Message from "../_components/Message.svelte";

  import List from "../_components/List.svelte";
  import Grid from "../_components/Grid.svelte";
  import GridList from "../_components/GridList.svelte";

	onMount(() => {
    document.body.classList.add('nav-sticky');
  });
	onDestroy(() => {
    document.body.classList.remove('nav-sticky');
	});

  const wpAdapter = getContext("WordpressAdapter");

  function windowWidth(){
    return window.innerWidth;
  }
  let width = windowWidth();

</script>

<svelte:window on:resize={() => width = windowWidth()}/>

<style type="text/scss">
  .panels {
    display: flex;
    .panel {
      flex: 1 0 50%;
      &:first-child {
        border-right: $border;
      }
    }
  }
</style>

<div class="panels">
  {#await wpAdapter.getPosts()}
    <Message />
  {:then posts}
    {(console.log(posts), '')}

    {#if width > 840}

      <div class="panel">
        <Grid {posts} />
      </div>

      <div class="panel">
        <List {posts} />
      </div>

    {:else}

      <GridList {posts} />

    {/if}

  {:catch error}
    <Message>{error.message}</Message>
  {/await}
</div>
