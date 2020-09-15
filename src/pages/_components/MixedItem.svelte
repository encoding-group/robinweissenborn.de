<script>
  import { url } from "@sveltech/routify";

  import Image from "./Image.svelte";
  import Marquee from "./Marquee.svelte";

  export let post = {};
</script>

<style type="text/scss">
  li {
    margin-bottom: 1rem;
    .info {
      display: flex;
      padding: 0 0.25em;
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
      }
    }
  }
  figure {
    padding: 0 0.5em;
    :global(img) {
      width: 100%;
      height: auto;
    }
  }
</style>

<li>
  <a href={$url('../:slug', { slug: post.slug })}>
    <figure>
      <Image image={post.titleImage} />
    </figure>

    <div class="info">
      <p class="col year">{post.year}</p>

      <h3 class="col title">
        <Marquee text={post.title} />
      </h3>
    </div>
  </a>
</li>
