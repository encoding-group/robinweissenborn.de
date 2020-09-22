<script>
  import { url } from "@sveltech/routify";

  import Image from "./Image.svelte";
  import Marquee from "./Marquee.svelte";

  export let post = {};
</script>

<style type="text/scss">
  li {
    margin-bottom: 2rem;
    .info {
      display: flex;
      padding: 0 1.25rem;
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
    margin-bottom: 0.5rem;
    :global(img) {
      width: 100%;
      height: 56.25vw;
    }
  }
</style>

<li>
  <a href={$url('../:slug', { slug: post.slug })}>
    <figure>
      <Image image={post.titleImage} fit={true} />
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
