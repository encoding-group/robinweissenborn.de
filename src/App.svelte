<script>
  import { Router } from "@sveltech/routify";
  import { metatags } from "@sveltech/routify";
  import { routes } from "../.routify/routes";

  metatags.title = "Robin Weißenborn"; // site.title
  metatags.author = "Robin Weißenborn"; // site.contact.name
  metatags.description = "Description..."; // site.description
  metatags.keywords = "tag1, tag2,"; // site.tags
  metatags.generator = "encoding.group";
  metatags["geo.region"] = "DE";

  metatags["og:type"] = "website";
  metatags["og:url"] = "https://robinweissenborn.de"; // site.url
  metatags["og:image"] = "image"; // site.image
  metatags["og:locale"] = "de_DE";

  let jsonld = {
    "@context": "https://schema.org",
    "@type": "Person",
    workLocation: {
      "@type": "PostalAddress",
      addressLocality: "", // site.contact.address1.city,
      postalCode: "", // site.contact.address1.zip,
      streetAddress: "", // site.contact.address1.street
    },
    name: "", // site.contact.name,
    alternateName: "Robin Weissenborn", // replace ß with ss
    description: "", // site.description,
    additionalType: "Artist",
    email: "", // "mailto:"+site.contact.mail,
    image: "", // site.image,
    jobTitle: "", // "Graphic Designer",
    url: "", // site.url
  };
</script>

<style type="text/scss" global>
  @import "../static/global.css";
</style>

<svelte:head>
  <!-- {@html `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>`} -->
</svelte:head>

<Router {routes} />
