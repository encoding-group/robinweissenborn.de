<script>
  import { getContext } from "svelte";
  import { asEuro } from "../../../js/utility.js";

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
            &.grid {
                border-right: $border;
            }
        }
    }

</style>

<div class="panels">

    <div class="panel grid">
        <Grid {posts} />
    </div>

    <div class="panel list">
        <List {posts} />
    </div>

</div>
