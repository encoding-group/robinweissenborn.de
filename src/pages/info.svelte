<script>
  import { url, metatags, ready } from "@sveltech/routify";
  import { processInfo } from "../js/wpResponseParser.js";

  import Loading from "./_components/Loading.svelte";
  import LocalTime from "./_components/LocalTime.svelte";

  metatags.title = "Info | Robin Weißenborn";

  let data;
  $: getData();
  function getData() {
    fetch("https://api.robinweissenborn.de/wp-json/wp/v2/pages?slug=info")
      .then((response) => response.json())
      .then((json) => {
        data = processInfo(json[0]);
        $ready();
      });
  }
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
    h1,
    p,
    address {
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
    :global(p) {
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

{#if data}
  <div class="panels">
    <section class="contact">
      <h1>{data.officeName}</h1>

      <h2>{data.contact.person}</h2>

      <address>
        {data['address-1'].street}<br />
        {data['address-1'].zip}
        {data['address-1'].city}<br />
        {data['address-1'].country}
      </address>

      <p>
        <a href="mailto:{data.contact.email}">{data.contact.email}</a><br />
        <a href="tel:{data.contact.tel}">{data.contact.tel}</a>
      </p>

      <LocalTime>{data['address-1'].city}</LocalTime>
    </section>

    <section class="about">
      <h2>{data.service}</h2>
      {@html data.content}
    </section>

    <section class="about">
      {@html data.info}
    </section>
  </div>
{:else}
  <Loading />
{/if}

<a class="imprint" href={$url('/imprint')}>Imprint</a>
