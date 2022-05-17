<script>
	import { metatags, ready } from "@sveltech/routify";
	import { processInfo } from "../../js/wpResponseParser.js";

	import Loading from "../_components/Loading.svelte";

	metatags.title = "Imprint | Robin Weißenborn";

	let data = { content: "" };
	let columns = {};
	$: getData();
	function getData() {
		fetch("https://api.robinweissenborn.de/wp-json/wp/v2/pages?slug=imprint")
			.then((response) => response.json())
			.then((json) => {
				data = processInfo(json[0]);
				data.column2 = json[0].acf.column_2;
				data.column3 = json[0].acf.column_3;
				$ready();
			})
			.catch((err) => console.log(err));
	}
</script>

{#if data}
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
{:else}
	<Loading />
{/if}

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