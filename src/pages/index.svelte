<script>
  import { getContext } from "svelte";

  import PostTeaser from "./_components/PostTeaser.svelte";
  import Message from "./_components/Message.svelte";

  const wpAdapter = getContext("WordpressAdapter");
</script>

<ul>
  {#await wpAdapter.getPosts()}
    <Message />
  {:then posts}
    {(console.log(posts), '')}

    <!-- filter featured posts -->
    {#each posts.filter(( p )=>{
      return p.featured; }) as post}

      <PostTeaser {post} />

    {/each}
  {:catch error}
    <Message>Could not load posts. ({error})</Message>
  {/await}
</ul>
