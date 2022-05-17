<script context="module">
	export async function load({ fetch }) {
		const data = await fetch(`/info/imprint.json`)
			.then((response) => response.json())
		return { props: { data } };
	}
</script>

<script>

	export let data;
	
</script>

<svelte:head>
  <title>Impressum | Robin Weißenborn</title>
</svelte:head>

<main>

	<section class="col-1">
		<h1>{data.title}</h1>
		{@html data.content}
	</section>

	<section class="col-2">
		{@html data.column2}
	</section>

	<section class="col-3">
		{@html data.column3}
	</section>

</main>

<style lang="scss">
	section {
		:global(h1) {
			margin-bottom: 1em;
		}
		:global(h2) {
			margin-bottom: 1em;
		}
		:global(h3) {
			margin-bottom: 1em;
		}
		:global(p + h2) {
			margin-top: 2em;
		}
		:global(p + h3) {
			margin-top: 2em;
		}
		:global(p) {
			margin-bottom: 1em;
		}
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
						padding-right: 1em;
						flex-basis: 25%;
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