<script>
  import { getContext } from "svelte";
  import { url } from "@sveltech/routify";

  import List from "../_components/List.svelte";
  import Grid from "../_components/Grid.svelte";

  let posts = [];
  const wpAdapter = getContext("WordpressAdapter");
  wpAdapter.getPostsData((result) => {
    posts = result;
    console.log(posts);
  });
</script>

<style type="text/scss">
  @import "../../../scss/_variables.scss";

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

  <div class="panel">
    <Grid {posts} />
  </div>

  <div class="panel">
    <List {posts} />
  </div>

</div>
