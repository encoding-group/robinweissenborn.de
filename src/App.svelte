<script>
  import { Router, Link, Route } from "svelte-routing";
  import { setContext } from "svelte";
  import Api from "./util/Api.js";
  import Home from "./routes/Home.svelte";
  import Post from "./routes/Post.svelte";

  setContext("robinApi", new Api("http://example.com/api/v1"));

  export let url = "";
</script>

<Route {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="posts">Post</Link>
  </nav>
  <div>
    <Route path="posts/:id" component={Post} />
    <Route path="/">
      <Home />
    </Route>
  </div>
</Route>
