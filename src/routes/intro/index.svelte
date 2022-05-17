<script>
  import { processPosts } from "$lib/wpResponseParser.js";

  import TeaserItem from "$lib/ui/TeaserItem.svelte";
  import Loading from "$lib/ui/Loading.svelte";

  let data;
  $: getData();
  function getData() {
    fetch("https://api.robinweissenborn.de/wp-json/wp/v2/posts?sticky=true&per_page=100")
      .then((response) => response.json())
      .then((json) => {
        data = processPosts(json);
      });
  }
</script>

<svelte:head>
  <title>Robin Weißenborn</title>
</svelte:head>

<ul>
  {#if data}
    <!-- filter featured posts -->
    {#each data as post}
      <TeaserItem {post} />
    {/each}
  {:else}
    <Loading />
  {/if}
</ul>

<style lang="scss">
  @media (hover: hover) and (pointer: fine) {
    @supports (scroll-snap-type: y mandatory) {
      ul {
        scroll-snap-type: y mandatory;
        overflow-y: auto;
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;
        :global( li ){
          scroll-snap-align: start;
        }
      }
    }
  }
</style>