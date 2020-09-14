<script>
  import { url } from "@sveltech/routify";
  import { createEventDispatcher } from 'svelte';

  import Image from "./Image.svelte";

  export let post = {};

  const dispatch = createEventDispatcher();
  function hover( state ) {

		dispatch('hover', state === true ? post.id : false);
	}
</script>

<style type="text/scss">
  li {
    border-bottom: $border;
    &:last-child,
    &:nth-last-child(2):nth-child(odd){
      border-bottom: none;
    }
    flex: 0 0 50%;
    > a {
      display: block;
      padding: 0.5rem;
    }
    &:nth-child(odd) {
      border-right: $border;
    }
  }
  figure {
    :global(img) {
      height: 13.6vw; /* 100 / 4 / 16 * 9 */
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
</style>

<li>
  <a href={$url('../:post', { post: post.slug })} on:mouseenter={()=> hover(true)} on:mouseleave={()=> hover(false)}>

    <figure>
      <Image image={post.titleImage} />
    </figure>

  </a>
</li>
