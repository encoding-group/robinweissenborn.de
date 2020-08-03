<script>
  import { getContext } from "svelte";

  const wpAdapter = getContext("WordpressAdapter");
</script>

<h1>Imprint</h1>
{#await wpAdapter.getPage('imprint')}
  <p>Loading...</p>
{:then site}
  {(console.log(site), '')}
  {@html site.content}
{:catch error}
  <p>{error.message}</p>
{/await}
