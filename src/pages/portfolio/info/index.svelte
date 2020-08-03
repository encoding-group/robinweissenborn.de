<script>
  import { getContext } from "svelte";

  import Message from "../_components/Message.svelte";

  const wpAdapter = getContext("WordpressAdapter");
</script>

<h1>Info</h1>
{#await wpAdapter.getPage('info')}
  <Message />
{:then site}
  {(console.log(site), '')}

  <p>
    {site.contact.person}
    <br />
    {site.contact.email}
  </p>

{:catch error}
  <Message>{error.message}</Message>
{/await}
