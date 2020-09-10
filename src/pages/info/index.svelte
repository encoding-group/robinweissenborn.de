<script>
  import { url } from "@sveltech/routify";
  import { getContext } from "svelte";

  import Message from "../_components/Message.svelte";
  import LocalTime from "../_components/LocalTime.svelte";

  const wpAdapter = getContext("WordpressAdapter");
</script>

<style type="text/scss">

  .panels {
    animation: fadein 1s;
    padding: 3.8rem 0.75rem 1.5rem;
    section {
      margin-bottom: 1em;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }
  .contact {
    h1, p, address {
      margin-bottom: 1em;
    }
  }
  .about {
    :global(em) {
      font-style: normal;
      text-decoration: underline;
    }
    :global(h3) {
      float: left;
    }
    :global(ul) {
      padding-left: 3.5em;
      margin-bottom: 1em;
    }
    :global(p){
      margin-bottom: 1em;
    }
  }
  .imprint {
    margin: 1.5em;
    color: #555;
  }

  @media only screen and (min-width: 640px) {
    .panels {
      display: flex;
      flex-wrap: wrap;
      section {
        flex: 0 0 50%;
        &.about {
          margin-bottom: 0;
        }
        &.about + .about {
          margin-left: 50%;
        }
      }
    }
    .imprint {
      position: fixed;
      bottom: 0;
      left: 0;
    }
  }
  @media only screen and (min-width: 920px) {
    .panels {
      flex-wrap: nowrap;
      padding-top: 1.5rem;
      section {
        flex-basis: 25%;
        &.contact {
          margin-left: 12.5%;
        }
        &.about + .about {
          margin-left: 0;
        }
      }
    }
  }
</style>

{#await wpAdapter.getPage('info')}
  <Message />
{:then site}
  {(console.log(site), '')}

  <div class="panels">

    <section class="contact">
      <h1>(P: Bureau for Visual Comunication)</h1>

      <h2>{site.contact.person}</h2>

      <address>
        {site['address-1'].street}<br />
        {site['address-1'].zip}
        {site['address-1'].city}<br />
        {site['address-1'].country}
      </address>

      <p>
        <a href="mailto:{site.contact.email}">{site.contact.email}</a><br />
        <a href="tel:{site.contact.tel}">{site.contact.tel}</a>
      </p>

      <LocalTime />
    </section>

    <section class="about">
      <h2>(P: Visual Communication)</h2>
      {@html site.content}
    </section>

    <section class="about">
      <p>(P: At the moment...)</p>
      <p>*P: Platzhalter und muss noch durch Custom Field ersetzt werden</p>
    </section>

  </div>
{:catch error}
  <Message>{error.message}</Message>
{/await}

<a class="imprint" href={$url('../../imprint')}>Imprint</a>
