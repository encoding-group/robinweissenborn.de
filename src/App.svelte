<script>
  import { Router } from "@sveltech/routify";
  import { metatags } from '@sveltech/routify'
  import { routes } from "../.routify/routes";
  import { setContext } from "svelte";
  import WordpressAdapter from "./js/WordpressAdapter.js";

  setContext(
    "WordpressAdapter",
    new WordpressAdapter("https://api.robinweissenborn.de/wp-json/wp/v2")
  );

  metatags.title = 'Robin Weißenborn'; // site.title
  metatags.author = 'Robin Weißenborn'; // site.contact.name
  metatags.description = 'Description...'; // site.description
  metatags.keywords = 'tag1, tag2,'; // site.tags
  metatags.generator = 'encoding.group';
  metatags['geo.region'] = 'DE';

  metatags['og:type'] = 'website';
  metatags['og:url'] = 'https://robinweissenborn.de'; // site.url
  metatags['og:image'] = 'image'; // site.image
  metatags['og:locale'] = 'de_DE';
</script>

<style type="text/scss" global>
  @import "../static/global.css";
</style>

<Router {routes} />
