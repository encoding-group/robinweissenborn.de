<script>
  import { getContext } from "svelte";

  import StickyPost from "./_components/StickyPost.svelte";
  import Message from "./_components/Message.svelte";

  const wpAdapter = getContext("WordpressAdapter");
</script>

<ul>
  {#await wpAdapter.getPosts()}
    <Message />
  {:then posts}
    {(console.log(posts), '')}
    {#each posts as post}
      <!-- only show sticky posts -->

      <StickyPost {post} />
    {/each}
  {:catch error}
    <Message>Could not load posts. ({error})</Message>
  {/await}
</ul>
