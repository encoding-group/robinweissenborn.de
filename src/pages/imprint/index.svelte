<script>
  import { getContext } from "svelte";

  import Message from "../_components/Message.svelte";

  const wpAdapter = getContext("WordpressAdapter");
</script>

<style type="text/scss">
  section {
    padding: 3.8rem 1.5rem;
  }
</style>

{#await wpAdapter.getPage('imprint')}
  <Message />
{:then site}
  {(console.log(site), '')}

  <section>
    {@html site.content}
  </section>

{:catch error}
  <Message>{error.message}</Message>
{/await}
