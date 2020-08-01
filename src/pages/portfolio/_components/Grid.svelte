<script>

    export let posts = [];

    console.log( posts );

</script>

<style type="text/scss">
  @import "../../../scss/_variables.scss";

  ul {
    display: flex;
    flex-wrap: wrap;
    border-top: $border;
  }
  li {
    border-bottom: $border;
    flex: 0 0 50%;
    > a {
        display: block;
        padding: 0.5rem;
    }
    &:nth-child(odd){
      border-right: $border;
    }
  }

</style>

<ul>
  {#if posts.length != 0}
    {#each posts as post}
      <li>
        <a>
          <figure>
            <img alt="Nice poster" src="" width="500" height="1000" />
          </figure>
        </a>
      </li>
    {/each}
  {:else}
    <li>Loading posts...</li>
  {/if}
</ul>
