<script>
  import { getContext } from "svelte";
  import { ready } from "@sveltech/routify";

  import PostTeaser from "./_components/PostTeaser.svelte";
  import Message from "./_components/Message.svelte";

  const wpAdapter = getContext("WordpressAdapter");
  let data;
  $: getData();
  function getData() {
    wpAdapter
      .getPosts()
      .then((json) => {
        data = json;
        $ready();
      })
      .catch((error) => console.log(error));
  }
</script>

<ul>
  {#if data}
    <!-- filter featured posts -->
    {#each data.filter((p) => {
      return p.featured;
    }) as post}
      <PostTeaser {post} />
    {/each}
  {:else}
    <Message />
  {/if}
</ul>
