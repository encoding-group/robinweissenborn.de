<script>
  import { setContext } from "svelte";
  import Api from "./util/Api.js";
  import Posts from "./components/Posts.svelte";

  setContext("robinApi", new Api("http://example.com/api/v1"));

  export let name;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>
<Posts />
