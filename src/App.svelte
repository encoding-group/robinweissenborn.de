<script>
  import { Router } from "@sveltech/routify";
  import { routes } from "../.routify/routes";
  import { setContext } from "svelte";
  import WordpressAdapter from "./js/WordpressAdapter.js";

  setContext(
    "WordpressAdapter",
    new WordpressAdapter("http://api.robinweissenborn.de/wp-json/wp/v2")
  );
</script>

<style type="text/scss" global>
  // @import "../static/global.css";
  @import "./scss/_reset.scss";
  @import "./scss/_variables.scss";
  @import "./scss/global.scss";
</style>

<Router {routes} />
