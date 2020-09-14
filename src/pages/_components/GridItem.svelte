<script>
  import { url } from "@sveltech/routify";
  import { createEventDispatcher } from 'svelte';

  import Image from "./Image.svelte";

  export let post = {};

  const dispatch = createEventDispatcher();
  let hover = false;
  function hoverEvent( state ) {
    hover = state;
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
  <a href={$url('../:post', { post: post.slug })} on:mouseenter={()=> hoverEvent(true)} on:mouseleave={()=> hoverEvent(false)}>

    <figure>
      {#if 'large' in post.secondaryTitleImage}
        <Image hide={hover} image={post.titleImage} />
        <Image hide={!hover} image={post.secondaryTitleImage} />
      {:else}
        <Image image={post.titleImage} />
      {/if}
    </figure>

  </a>
</li>
