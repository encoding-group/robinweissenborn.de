<script>
  import { getContext } from "svelte";
  import { ready } from "@sveltech/routify";

  import Message from "./_components/Message.svelte";

  const wpAdapter = getContext("WordpressAdapter");

  let data;
  $: getData();
  function getData() {
    wpAdapter.getPage("imprint").then((json) => {
      data = json;
      $ready();
    });
  }
</script>

<style type="text/scss">
  section {
    padding: 3.8rem 1.5rem;
    animation: fadein 1s;
  }
</style>

{#if data}
  <section>
    {@html data.content}
  </section>
{:else}
  <Message />
{/if}
