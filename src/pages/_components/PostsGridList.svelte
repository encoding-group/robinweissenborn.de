<script>
  import { url } from "@sveltech/routify";

  import Image from "./Image.svelte";

  export let posts = [];
</script>

<style type="text/scss">
  ul {
    li {
      margin-bottom: 1rem;
      > a {
        display: block;
      }
    }
  }
  figure {
    padding: 0 0.5em;
  }
  .info {
    display: flex;
    .col {
      padding: 0.5em 0.5em;
      flex: 1 1 auto;
      &.w3 {
        flex-basis: 30%;
      }
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

        <div class="info">
          <p class="col">{post.year}</p>
          <h3 class="col w3">{post.title}</h3>
          <p class="col w3">{post.client.join(', ')}</p>
          <p class="col w3">{post.discipline.join(', ')}</p>
        </div>
      </a>
    </li>
  {/each}
</ul>
