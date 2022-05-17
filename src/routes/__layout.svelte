<script>
  
  import "../scss/global.scss";
  import "lazysizes";
  import { checkExternalLinks } from "$lib/utility.js";
  import Meta from "$lib/Meta.svelte";

</script>

<svelte:window on:click={checkExternalLinks} />

<Meta />

<slot />
