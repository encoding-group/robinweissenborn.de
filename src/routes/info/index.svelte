<script context="module">
	export async function load({ fetch }) {
		const data = await fetch(`/info.json`)
			.then((response) => response.json())
		return { props: { data } };
	}
</script>

<script>

  import LocalTime from "$lib/ui/LocalTime.svelte";

  export let data;

</script>

<svelte:head>
  <title>Info | Robin Weißenborn</title>
</svelte:head>

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
    
    {#if data['address-2'].city}
      <address>
        {data['address-2'].street}<br />
        {data['address-2'].zip}
        {data['address-2'].city}<br />
        {data['address-2'].country}
      </address>
    {/if}

    <p>
      <a title="Send me an email" href="mailto:{data.contact.email}">{data.contact.email}</a><br />
      <a title="Call me" href="tel:{data.contact.tel}">{data.contact.tel}</a>
    </p>

    <div class="clock">
      <LocalTime>{data['address-1'].city}</LocalTime>
      {#if data['address-2'].city}
        <LocalTime>{data['address-2'].city}</LocalTime>
      {/if}
    </div>

  </section>

  <section class="about">
    <h2>{data.service}</h2>
    {@html data.content}
  </section>

  <section class="about">
    {@html data.info}
  </section>

</main>

<a title="Imprint" class="imprint" href="/info/imprint" sveltekit:prefetch>Imprint</a>


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
