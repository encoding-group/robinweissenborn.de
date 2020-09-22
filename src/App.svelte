<script>
  import { Router } from "@sveltech/routify";
  import { metatags, ready } from "@sveltech/routify";
  import { routes } from "../.routify/routes";
  import { processInfo } from "./js/wpResponseParser.js";
  import { checkExternalLinks } from "./js/externalLinks.js";

  import "lazysizes";

  let jsonld;
  $: getData(metatags);
  function getData(meta) {
    fetch("https://api.robinweissenborn.de/wp-json/wp/v2/pages?slug=info")
      .then((response) => response.json())
      .then((json) => {
        getMeta(meta, json[0]);
        jsonld = getJsonLd(json[0]);
        $ready();
      });
  }


  function getMeta(metaObject, data) {
    metaObject.title = "Robin Weißenborn";
    metaObject.author = "Robin Weißenborn";
    if( data.acf["website-metadata"].description ){
      metaObject["description"] = data.acf["website-metadata"].description;
    }
    if( data.acf["website-metadata"].keywords ){
      metaObject["keywords"] = data.acf["website-metadata"].keywords;
    }
    metaObject.generator = "encoding.group";
    metaObject["geo.region"] = "DE";

    if( data.acf["website-metadata"].image ){
      metaObject["og:image"] = data.acf["website-metadata"].image;
    }
    metaObject["og:type"] = "website";
    metaObject["og:url"] = "https://robinweissenborn.de"; // site.url
    metaObject["og:locale"] = "de_DE";
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
