<script context="module">
	export async function load({ fetch }) {
		const response = await fetch(`/portfolio.json`);
    return { props: {
      posts: response.ok && (await response.json())
    }};
	}
</script>

<script>
  import { onMount } from "svelte";
  import { onDestroy } from "svelte";

  import Navigation from "$lib/ui/Navigation.svelte";
  import NavigationArchive from "$lib/ui/NavigationArchive.svelte";

  import Loading from "$lib/ui/Loading.svelte";

  import GridItem from "$lib/ui/GridItem.svelte";
  import ListItem from "$lib/ui/ListItem.svelte";
  import MixedItem from "$lib/ui/MixedItem.svelte";

  let panels = false;
  function panelsLayout() {
    panels = window.innerWidth >= 840;
    return panels;
  }
  onMount(()=>{
    panelsLayout();
  });

  export let posts;

  let hover = false;
  function onItemHover(event) {
    hover = event.detail;
  }
</script>

<svelte:head>
  <title>Robin Weißenborn</title>
</svelte:head>

<svelte:window on:resize={panelsLayout} />

<main class:panels>

  {#if panels}

    <NavigationArchive />

    <div class="panels">
      <section>
        {#if posts}
          <ul class="grid">
            {#each posts as post}
              <GridItem {post} on:hover={onItemHover} />
            {/each}
          </ul>
        {:else}
          <Loading />
        {/if}

      </section>
      <section>
        {#if posts}
          <ul class="list">
            {#each posts as post}
              <ListItem {post} hover={hover === post.id} />
            {/each}
          </ul>
        {:else}
          <Loading />
        {/if}
      </section>
    </div>

  {:else if posts}

    <Navigation />
    <ul class="mixed">
      {#each posts as post}
        <MixedItem {post} />
      {/each}
    </ul>

  {:else}
    <Loading />
  {/if}

</main>

<style lang="scss">
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
      flex-shrink: 1;
      flex-grow: 1;
      flex-basis: 97%;
      height: 97%;
      min-height: 30%;
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
      margin-top: 4rem;
    }
  }
</style>