<script>
  import { ready } from "@sveltech/routify";
  import { processInfo } from "../js/wpResponseParser.js";

  import Message from "./_components/Message.svelte";

  let data = { content: "stuff" };
  $: getData();
  function getData() {
    fetch("https://api.robinweissenborn.de/wp-json/wp/v2/pages?slug=imprint")
      .then((response) => response.json())
      .then((json) => {
        data = processInfo(json[0]);
        $ready();
      })
      .catch((err) => console.log(err));
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
