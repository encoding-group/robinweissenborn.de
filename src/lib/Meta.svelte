<script>

  // let metaData;
  // $: getData();
  // function getData() {
  //   fetch("https://api.robinweissenborn.de/wp-json/wp/v2/pages?slug=info")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       metaData = json[0];
  //     });
  // }

  // function removeJsonLdBlockIfExists() {
  //   const sc = document.querySelector('[type="application/ld+json"]');
  //   if (sc) {
  //     sc.remove();
  //   }
  // }

  // $: if (metaData) {
  //   const jsonLdNode = document.createElement("script");
  //   jsonLdNode.setAttribute("type", "application/ld+json");
  //   jsonLdNode.innerText = getJsonLd(metaData);
  //   removeJsonLdBlockIfExists();
  //   document.head.appendChild(jsonLdNode);

  //   // metatags.title = "Robin Weißenborn";
  //   metatags.author = `${metaData.acf.contact.first_name}`;
  //   if (metaData.acf["website-metadata"].description) {
  //     metatags["description"] = metaData.acf["website-metadata"].description;
  //   }
  //   if (metaData.acf["website-metadata"].keywords) {
  //     metatags["keywords"] = metaData.acf["website-metadata"].keywords;
  //   }
  //   metatags.generator = "encoding.group";
  //   metatags["geo.region"] = "DE";

  //   if (metaData.acf["website-metadata"].image) {
  //     metatags["og:image"] = metaData.acf["website-metadata"].image;
  //   }
  //   metatags["og:type"] = "website";
  //   metatags["og:url"] = "https://robinweissenborn.de"; // site.url
  //   metatags["og:locale"] = "de_DE";
  // }

  // function getJsonLd(data) {
  //   return JSON.stringify({
  //     "@context": "https://schema.org",
  //     "@type": "Person",
  //     workLocation: {
  //       "@type": "PostalAddress",
  //       addressLocality: data.acf["address-1"].city,
  //       postalCode: data.acf["address-1"].zip_code,
  //       streetAddress: data.acf["address-1"].street,
  //     },
  //     name: `${data.acf.contact.first_name} ${data.acf.contact.last_name}`,
  //     alternateName: `${data.acf.contact.first_name} ${data.acf.contact.last_name}`.replace(
  //       /ß/g,
  //       "ss"
  //     ),
  //     description: data.acf["website-metadata"].description,
  //     additionalType: "Artist",
  //     email: data.acf.contact.email,
  //     image: data.acf["website-metadata"].image,
  //     jobTitle: "Graphic Designer",
  //     url: "https://robinweissenborn.de", // site.url
  //   });
  // }
</script>