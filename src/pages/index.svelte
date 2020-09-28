<script>
  import { metatags, ready } from "@sveltech/routify";
  import { processPosts } from "../js/wpResponseParser.js";

  import TeaserItem from "./_components/TeaserItem.svelte";
  import Loading from "./_components/Loading.svelte";

  metatags.title = "Robin Weißenborn";

  let data;
  $: getData();
  function getData() {
    fetch("https://api.robinweissenborn.de/wp-json/wp/v2/posts?sticky=true&per_page=100")
      .then((response) => response.json())
      .then((json) => {
        data = processPosts(json);
        $ready();
      });
  }
</script>

<style type="text/scss">
  @supports (scroll-snap-type: y mandatory) {
    ul {
      scroll-snap-type: y mandatory;
      overflow-y: scroll;
      height: 100%;
      height: 100vh;
      height: -moz-available;
      height: -webkit-fill-available;
      height: fill-available;
    }
  }
</style>

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
