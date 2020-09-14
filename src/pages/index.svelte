<script>
  import { getContext } from "svelte";
  import { ready } from "@sveltech/routify";

  import TeaserItem from "./_components/TeaserItem.svelte";
  import Message from "./_components/Message.svelte";

  const wpAdapter = getContext("WordpressAdapter");
  let data;
  $: getData();
  function getData() {
    wpAdapter
      .getPosts()
      .then((json) => {
        data = json;
        $ready();
      })
      .catch((error) => console.log(error));
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
    {#each data.filter((p) => {
      return p.featured;
    }) as post}
      <TeaserItem {post} />
    {/each}
  {:else}
    <Message />
  {/if}
</ul>
