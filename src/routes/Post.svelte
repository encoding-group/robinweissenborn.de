<script>
  import { Route } from "svelte-routing";
  import Post from "../components/Post.svelte";
  import { getContext } from "svelte";
  import process from "../util/PostParser.js";

  let api = getContext("robinApi");
  let post = {};
  api.getPostData(1, (result) => {
    post = result;
  });
</script>

<Route path="posts/:id" let:params>
  <Post id={params.id} />
</Route>
