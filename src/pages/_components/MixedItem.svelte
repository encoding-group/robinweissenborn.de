<script>
  import { url } from "@sveltech/routify";

  import Image from "./Image.svelte";
  import Marquee from "./Marquee.svelte";

  export let post = {};
  let hover = false;
</script>

<style type="text/scss">
  li {
    .info {
      display: flex;
      padding: 0.25rem 1.25rem 2rem;
      .col {
        padding: 0.25em;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: auto;
        overflow: hidden;
        &.title {
          flex-grow: 1;
          flex-shrink: 1;
        }
        &.client,
        &.discipline {
          flex-basis: 25%;
        }
      }
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
  <a href={$url('../:slug', { slug: post.slug })}
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
      <p class="col year">{post.year}</p>

      <h3 class="col title">
        <Marquee text={post.title} />
      </h3>

      <p class="col client">
        <Marquee text={post.client.length > 0 ? post.client.join(', ') : '—'} />
      </p>

      <p class="col discipline">
        <Marquee
          text={post.discipline.length > 0 ? post.discipline.join(', ') : '—'} />
      </p>

    </div>
  </a>
</li>
