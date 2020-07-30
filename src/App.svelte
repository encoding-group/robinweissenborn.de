<script>
  import { Router } from "@sveltech/routify";
  import { routes } from "../.routify/routes";
</script>

<style type="text/scss" global>
  // @import "../static/global.css";
  @import "./scss/_reset.scss";
  @import "./scss/_variables.scss";
  @import "./scss/global.scss";
</style>

<Router {routes} />
