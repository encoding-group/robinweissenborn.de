<script>
  import { url } from "@sveltech/routify";
  import { createEventDispatcher } from "svelte";

  import Image from "./Image.svelte";

  export let post = {};

  const dispatch = createEventDispatcher();
  let hover = false;
  function hoverEvent(state) {
    hover = state;
    dispatch("hover", state === true ? post.id : false);
  }
</script>

<style type="text/scss">
  li {
    border-bottom: $border;
    &:last-child,
    &:nth-last-child(2):nth-child(odd) {
      border-bottom: none;
    }
    flex: 0 0 50%;
    > a {
      display: block;
    }
    &:nth-child(odd) {
      border-right: $border;
    }
  }
  figure {
    height: 14.0625vw; /* 100 / 4 / 16 * 9 */
    padding: 0.5rem;
    :global(img) {
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  .frameless {
    background-color: #000 !important;
    figure {
      padding: 0;
    }
  }
</style>

<li style="background-color:{post.color}" class:frameless={post.isFrameless}>
  <a href={$url('../:post', { post: post.slug })}
    on:mouseenter={() => hoverEvent(true)}
    on:mouseleave={() => hoverEvent(false)}>
    <figure>
      {#if post.secondaryTitleImage}
        <Image hide={hover} image={post.titleImage} />
        <Image
          hide={!hover}
          image={post.secondaryTitleImage}
          lazyload={false} />
      {:else}
        <Image image={post.titleImage} />
      {/if}
    </figure>
  </a>
</li>
