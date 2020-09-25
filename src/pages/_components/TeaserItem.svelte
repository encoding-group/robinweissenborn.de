<script>
  import { url } from "@sveltech/routify";

  import Headline from "./Headline.svelte";
  import Figure from "./Figure.svelte";

  export let post = [];
</script>

<style type="text/scss">
  li {
    animation: fadein 1s;
    height: 100vh;
    height: -webkit-fill-available;
    scroll-snap-align: start;
		> a {
      height: 100%;
      height: -webkit-fill-available;
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
    <Headline>
      <h3>{post.title}</h3>
    </Headline>
    {#if 'titleImage' in post}
      <Figure image={post.titleImage} />
    {/if}
  </a>
</li>
