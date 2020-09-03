<script>
  import { url } from "@sveltech/routify";

  import Headline from "./Headline.svelte";
  import Figure from "./Figure.svelte";

  export let post = [];
</script>

<style type="text/scss">
	li {
		height: 100vh;
		> a {
			height: 100%;
			display: flex;
			position: relative;
			:global(.headline) {
				position: absolute;
				top: 0;
			}
		}
	}
</style>

<li class="post">
	<a href={$url('../archive/:post', { post: post.slug })}>

		<Headline><h3>{post.title}</h3></Headline>

		{#if 'titleImage' in post}
			<Figure image={post.titleImage} />
		{/if}

	</a>
</li>
