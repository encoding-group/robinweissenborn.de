<script>
  import { getContext } from "svelte";

  const wpAdapter = getContext("WordpressAdapter");
</script>

<h1>Info</h1>
{#await wpAdapter.getPage('info')}
  <p>Loading...</p>
{:then site}
  {(console.log(site), '')}
  <p>
    {site.contact.person}
    <br />
    {site.contact.email}
  </p>
{:catch error}
  <p>{error.message}</p>
{/await}
