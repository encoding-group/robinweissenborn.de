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
		> a {
      height: 100vh;
			display: flex;
			flex-direction: column;
      padding-bottom: 1.5rem;
			:global(.headline) {
				flex: 0 0 auto;
			}
      div {
        position: relative;
        height: 100%;
      }
		}
	}
</style>

<li class="post">
  <a title="{post.title}" href={$url('../archive/:post', { post: post.slug })}>
    <Headline>
      <h3>{post.title}</h3>
    </Headline>
    {#if 'titleImage' in post}
      <div>
        <Figure image={post.titleImage} />
      </div>
    {/if}
  </a>
</li>
