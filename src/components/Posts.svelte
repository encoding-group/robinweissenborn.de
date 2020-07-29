<script>
  import { getContext } from "svelte";
  import { Link } from "svelte-routing";

  let posts = {};
  let api = getContext("robinApi");

  api.getPostsData((result) => {
    posts = result;
  });
</script>

<h2>Posts Component</h2>
<ol>
  {#if Object.keys(posts) != 0}
    {#each posts as post}

      <li>
        <Link to="/{post.id}" getProps={()=>({ title: post.title })}>
          <div class="col indicator">•</div>
          <div class="col date">{post.date}</div>
          <h3 class="col title">{post.titleShort}</h3>
          <div class="col client">{post.client}</div>
          <div class="col discipline">{post.discipline.join(', ')}</div>
        </Link>
      </li>

    {/each}
  {:else}
    <li>Loading Posts</li>
  {/if}
</ol>

<style>

  li {
    border-bottom: 1px solid #fff;
  }
  li :global(a) {
    display: flex;
    padding: 0em 0.3em;
  }
  .col {
    flex: 1 1 auto;
    padding: 0.3em;
  }

</style>
