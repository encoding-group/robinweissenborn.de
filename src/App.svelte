<script>
  import { Router } from "@sveltech/routify";
  import { metatags, ready } from "@sveltech/routify";
  import { routes } from "../.routify/routes";
  import { processInfo } from "./js/wpResponseParser.js";
  import { checkExternalLinks } from "./js/externalLinks.js";

  import "lazysizes";

  let jsonld;
  $: getData();
  function getData() {
    fetch("https://api.robinweissenborn.de/wp-json/wp/v2/pages?slug=info")
      .then((response) => response.json())
      .then((json) => {
        getMeta(json[0]);
        jsonld = getJsonLd(json[0]);
        $ready();
      });
  }

  metatags.title = "Robin Weißenborn";
  function getMeta(data) {

    metatags.author = 'moritz';

    if( data.acf["website-metadata"].description ){
      metatags.description = data.acf["website-metadata"].description;
    }
    if( data.acf["website-metadata"].keywords ){
      metatags.keywords = data.acf["website-metadata"].keywords;
    }
    metatags.generator = "encoding.group";
    metatags["geo.region"] = "DE";

    if( data.acf["website-metadata"].image ){
      metatags["og:image"] = data.acf["website-metadata"].image;
    }
    metatags["og:type"] = "website";
    metatags["og:url"] = "https://robinweissenborn.de"; // site.url
    metatags["og:locale"] = "de_DE";
  }

  function getJsonLd(data) {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      workLocation: {
        "@type": "PostalAddress",
        addressLocality: data.acf["address-1"].city,
        postalCode: data.acf["address-1"].zip_code,
        streetAddress: data.acf["address-1"].street,
      },
      name: `${data.acf.contact.first_name} ${data.acf.contact.last_name}`,
      alternateName: `${data.acf.contact.first_name} ${data.acf.contact.last_name}`.replace(
        /ß/g,
        "ss"
      ),
      description: data.acf["website-metadata"].description,
      additionalType: "Artist",
      email: data.acf.contact.email,
      image: data.acf["website-metadata"].image,
      jobTitle: "Graphic Designer",
      url: "https://robinweissenborn.de", // site.url
    });
  }
</script>

<style type="text/scss" global>
  @import "../static/global.css";
</style>

<svelte:window on:click={checkExternalLinks} />

<svelte:head>
  {@html '<script type="application/ld+json">' + jsonld + '</script>'}
</svelte:head>

<Router {routes} />
