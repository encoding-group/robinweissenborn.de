<script>
  import { url } from "@sveltech/routify";
  import { getContext } from "svelte";

  import Message from "../_components/Message.svelte";

  const wpAdapter = getContext("WordpressAdapter");
</script>

<style type="text/scss">
  .panels {
    display: flex;
    padding: 1.5rem;
    section {
      flex: 1 0 50%;
      &:first-child {
        padding-top: 2rem;
        padding-right: 1.5rem;
      }
    }
  }

  .contact li {
    margin-bottom: 1rem;
  }

  .imprint {
    color: #333;
  }
</style>

{#await wpAdapter.getPage('info')}
  <Message />
{:then site}
  {(console.log(site), '')}

  <div class="panels">
    <section>

      <ul class="contact">
        <li>
          <p>13:20:00</p>
          <address>
            {site.contact.street}<br />
            {site.contact.zip}
            {site.contact.city}<br />
            {site.contact.country}
          </address>
        </li>
        <li>
          <p>13:20:00</p>
          <address>
            {site.contact.street}<br />
            {site.contact.zip}
            {site.contact.city}<br />
            {site.contact.country}
          </address>
        </li>
        <li>
          <p>
            <a href="mailto:{site.contact.email}">{site.contact.email}</a><br />
            <a href="tel:{site.contact.tel}">{site.contact.tel}</a>
          </p>
        </li>
      </ul>

      <a class="imprint" href={$url("../../imprint")}>Imprint</a>

    </section>
    <section>

      <h2>Visual Communication</h2>
      {@html site.content}

    </section>
  </div>

{:catch error}
  <Message>{error.message}</Message>
{/await}
