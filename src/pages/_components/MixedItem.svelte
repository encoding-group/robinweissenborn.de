<script>
  import { url } from "@sveltech/routify";

  import Image from "./Image.svelte";

  export let posts = [];
</script>

<style type="text/scss">
  ul {
    li {
      margin-bottom: 1rem;
      .item {
        display: flex;
        .col {
          padding: 0.25em 0.25em;
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
  }
  figure {
    padding: 0 0.5em;
    :global( img ){
      width: 100%;
      height: auto;
    }
  }
</style>

<ul>
  {#each posts as post}
    <li>
      <a href={$url('../:slug', { slug: post.slug })}>

        <figure>
          <Image image={post.titleImage} />
        </figure>

        <div class="item">

          <p class="col year">{post.year}</p>

          <h3 class="col title">
            <Marquee text={post.title} />
          </h3>

        </div>

      </a>
    </li>
  {/each}
</ul>
