<script>
  
  import "../scss/global.scss";
  import "lazysizes";
  import { checkExternalLinks } from "$lib/externalLinks.js";
  import Meta from "$lib/Meta.svelte";

</script>

<svelte:window on:click={checkExternalLinks} />

<Meta />

<slot />
