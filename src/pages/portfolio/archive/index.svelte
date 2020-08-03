<script>
  import { getContext } from "svelte";
  import { url } from "@sveltech/routify";

  import List from "../_components/List.svelte";
  import Grid from "../_components/Grid.svelte";
  import Message from "../_components/Message.svelte";

  const wpAdapter = getContext("WordpressAdapter");
</script>

<style type="text/scss">
  .panels {
    display: flex;
    .panel {
      flex: 1 0 50%;
      &:first-child {
        border-right: $border;
      }
    }
  }
</style>

<div class="panels">
  {#await wpAdapter.getPosts()}
    <Message />
  {:then posts}
    {(console.log(posts), '')}

    <div class="panel">
      <Grid {posts} />
    </div>

    <div class="panel">
      <List {posts} />
    </div>

  {:catch error}
    <Message>{error.message}</Message>
  {/await}
</div>
