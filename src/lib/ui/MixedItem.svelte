<script>
  import { url } from "@sveltech/routify";

  import Image from "./Image.svelte";
  import Marquee from "./Marquee.svelte";

  export let post = {};
  let hover = false;
</script>

<style lang="scss">
  li {
    .info {
      padding: 0.25rem 1.25rem 2rem;
      text-align: center;
    }
  }
  figure {
    padding: 0 0.5em;
    :global(img) {
      width: 100%;
      height: 56.25vw;
    }
  }
</style>

<li class:hover>
  <a href={$url('/portfolio/:slug', { slug: post.slug })} title="{post.title}"
    on:touchstart={() => hover = true}
    on:touchend={() => hover = false}
    on:touchcancel={() => hover = false}
    on:mouseenter={() => hover = true}
    on:mouseleave={() => hover = false}>
    <figure>
      {#if post.secondaryTitleImage}
        <Image hide={hover} image={post.titleImage} fit={true} />
        <Image
          hide={!hover}
          image={post.secondaryTitleImage}
          lazyload={false} fit={true} />
      {:else}
        <Image image={post.titleImage} fit={true} />
      {/if}
    </figure>

    <div class="info">

      <h3 class="col title">
        {post.title}
      </h3>

    </div>
  </a>
</li>
