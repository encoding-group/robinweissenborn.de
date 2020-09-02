<script>
  import { Router } from "@sveltech/routify";
  import { routes } from "../.routify/routes";
  import { setContext } from "svelte";
  import WordpressAdapter from "./js/WordpressAdapter.js";

  setContext(
    "WordpressAdapter",
    new WordpressAdapter("https://api.robinweissenborn.de/wp-json/wp/v2")
  );
</script>

<style type="text/scss" global>
  @import "../static/global.css";
</style>

<Router {routes} />
