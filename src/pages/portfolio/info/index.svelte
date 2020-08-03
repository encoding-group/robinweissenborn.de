<script>
  import { getContext } from "svelte";

  import Message from "../_components/Message.svelte";

  const wpAdapter = getContext("WordpressAdapter");
</script>

<style type="text/scss">
  .panels {
    display: flex;
    section {
      flex: 1 0 50%;
      padding: 1.5rem;
    }
  }

  address {
    margin-bottom: 1em;
  }
</style>

{#await wpAdapter.getPage('info')}
  <Message />
{:then site}
  {(console.log(site), '')}

  <div class="panels">
    <section>

      <h1>{site.contact.person}</h1>
      <address>
        {site.contact.street}<br />
        {site.contact.zip}
        {site.contact.city}<br />
        {site.contact.country}
      </address>

      <p>
        {site.contact.email}<br />
        {site.contact.tel}
      </p>

    </section>
    <section>
      <h2>Visual Communication</h2>
      {site.content}
    </section>
  </div>

{:catch error}
  <Message>{error.message}</Message>
{/await}
