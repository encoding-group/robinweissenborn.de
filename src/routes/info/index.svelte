<script>
  import { url, metatags, ready } from "@sveltech/routify";
  import { processInfo } from "../../js/wpResponseParser.js";

  import Loading from "../_components/Loading.svelte";
  import LocalTime from "../_components/LocalTime.svelte";

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

<style lang="scss">
	section {
		h1,
		p,
		address {
			margin-bottom: 1em;
		}
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
  main {
    animation: fadein 1s;
    padding: 4rem 1.5rem 1.5rem;
    @media only screen and (min-width: 640px) {
        display: flex;
        flex-wrap: wrap;
        :global( section ) {
            flex: 0 0 50%;
            &:nth-child(2) {
                margin-bottom: 0;
            }
            &:nth-child(3) {
                margin-left: 50%;
            }
        }
        .imprint {
            position: fixed;
            bottom: 0;
            left: 0;
        }
    }
    @media only screen and (min-width: 920px) {
        flex-wrap: nowrap;
		padding-top: 1.5rem;
        section {
          flex-basis: 25%;
          padding-right: 1em;
          &:first-child {
            margin-left: 12.5%;
          }
          &:nth-child(3) {
            margin-left: 0;
          }
        }
    }
  }
</style>

{#if data}

  <main>

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
        <a title="Send me an email" href="mailto:{data.contact.email}">{data.contact.email}</a><br />
        <a title="Call me" href="tel:{data.contact.tel}">{data.contact.tel}</a>
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

  </main>

{:else}
  <Loading />
{/if}

<a title="Imprint" class="imprint" href={$url('/info/imprint')}>Imprint</a>
