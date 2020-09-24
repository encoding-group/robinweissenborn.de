<script>
  export let image;

  export let alt = image.title || "";
  export let src = image.large || "";
  export let width = image.largeWidth || "100%";
  export let height = image.largeHeight || "auto";
  export let srcset = image.srcset || "";
  export let sizes = image.sizes || "";

  if( image.full.endsWith(".gif") ){
    srcset = '';
    sizes = '';
  }

  export let hide = false;
  export let lazyload = true;
  export let fit = false;

</script>

<style>
  img.hide {
    display: none;
  }
  img.fit {
    object-fit: contain;
    object-position: center;
  }
</style>

{#if lazyload === true}
  <img class:hide class:lazyload class:fit {alt} {width} {height}
    data-src={src}
    data-srcset={srcset}
    data-sizes={sizes} />
{:else}
  <img class:hide class:fit {alt} {width} {height}
    src={src}
    srcset={srcset}
    sizes={sizes} />
{/if}
