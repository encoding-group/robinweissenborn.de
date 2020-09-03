<script>
  import { url } from "@sveltech/routify";

  import Headline from "./Headline.svelte";
  import Figure from "./Figure.svelte";

  export let post = [];
</script>

<style type="text/scss">
<<<<<<< HEAD
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
=======
  li {
    height: 100vh;
    > a {
      height: 100%;
      display: block;
      display: flex;
      flex-direction: column;
    }
  }
  .title {
    padding: 1.5rem;
    text-align: center;
  }
  figure {
    padding: 0 1.5rem 4.5rem;
    flex: 1;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
</style>

{#if post.featured}
  <li class="post">
    <a href={$url('../archive/:post', { post: post.slug })}>
      <Headline>
        <h3>{post.title}</h3>
      </Headline>
      {#if 'titleImage' in post}
        <figure>
          <img alt={post.titleImage.caption} src={post.titleImage.full} />
        </figure>
      {/if}
    </a>
  </li>
{/if}
>>>>>>> 6b08e2a51febddd082f4b82ae4d91c223417574f
