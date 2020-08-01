<script>

    export let posts = [];

</script>

<style type="text/scss">
  @import "../../../scss/_variables.scss";

  .post {
    border-top: $border;
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
      <li class="post">
        <a>
            <div class="col hover"></div>
            <div class="col">{post.year}</div>
            <h3 class="col w3">{post.title}</h3>
            <div class="col w3">{post.client.join(', ')}</div>
            <div class="col w3">{post.discipline.join(', ')}</div>
        </a>
      </li>
    {/each}
  {:else}
    <li class="post">Loading posts...</li>
  {/if}
</ul>
