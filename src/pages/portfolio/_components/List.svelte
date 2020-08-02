<script>
  import { url } from "@sveltech/routify";

  export let posts = [];
</script>

<style type="text/scss">
  ul {
    border-top: $border;
  }
  li {
    border-bottom: $border;
    > a {
      display: flex;
      .col {
        padding: 0.3em 0.6em;
        flex: 1 1 auto;
        &.w3 {
          flex-basis: 30%;
        }
      }
    }
  }
</style>

<ul>
  {#if posts.length != 0}
    {#each posts as post}
      <li>
        <a href={$url('../:slug', { slug: post.slug })}>
          <div class="col hover">{post.slug}</div>
          <p class="col">{post.year}</p>
          <h3 class="col w3">{post.title}</h3>
          <p class="col w3">{post.client.join(', ')}</p>
          <p class="col w3">{post.discipline.join(', ')}</p>
        </a>
      </li>
    {/each}
  {:else}
    <li>Loading posts...</li>
  {/if}
</ul>
