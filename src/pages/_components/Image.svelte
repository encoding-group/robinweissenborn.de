<script>
  export let image;

  export let alt = image.title || "";
  export let src = image.large || "";
  export let width = image.largeWidth || "100%";
  export let height = image.largeHeight || "auto";
  export let srcset = image.srcset || "";
  export let sizes = image.sizes || "";

  export let hide = false;
  export let lazyload = true;

</script>

<style>
  img.hide {
    display: none;
  }
</style>

{#if lazyload === true}
  <img class:hide class:lazyload {alt} {width} {height}
    data-src={src}
    data-srcset={srcset}
    data-sizes={sizes} />
{:else}
  <img class:hide {alt} {width} {height}
    src={src}
    srcset={srcset}
    sizes={sizes} />
{/if}
