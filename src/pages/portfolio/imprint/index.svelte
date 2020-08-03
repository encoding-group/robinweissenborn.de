<script>
  import { getContext } from "svelte";

  import Message from "../_components/Message.svelte";

  const wpAdapter = getContext("WordpressAdapter");
</script>

<h1>Imprint</h1>
{#await wpAdapter.getPage('imprint')}
  <Message />
{:then site}
  {(console.log(site), '')}

  {@html site.content}

{:catch error}
  <Message>{error.message}</Message>
{/await}
