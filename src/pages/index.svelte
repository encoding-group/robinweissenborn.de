<script>
  import { ready } from "@sveltech/routify";
  import { processPosts } from "../js/wpResponseParser.js";

  import TeaserItem from "./_components/TeaserItem.svelte";
  import Message from "./_components/Message.svelte";

  let data;
  $: getData();
  function getData() {
    fetch("https://api.robinweissenborn.de/wp-json/wp/v2/posts?sticky=true?per_page=100")
      .then((response) => response.json())
      .then((json) => {
        data = processPosts(json);
        $ready();
      });
  }
</script>

<style type="text/scss">
  ul {
    scroll-snap-type: y mandatory;
    max-height: 100vh;
    overflow-y: scroll;
  }
</style>

<ul>
  {#if data}
    <!-- filter featured posts -->
    {#each data as post}
      <TeaserItem {post} />
    {/each}
  {:else}
    <Message />
  {/if}
</ul>
