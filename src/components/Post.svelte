<script>
  import { getContext } from "svelte";
  import process from "../util/PostParser.js";

  let api = getContext("robinApi");
  let post = {};
  api.getPostData(1, (result) => {
    post = result;
  });
</script>

<h3>{post.title}</h3>
<p>{post.content}</p>
