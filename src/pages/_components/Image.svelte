<script>
  export let image;

  export let caption = image.caption || "";
  export let src = image.large || "";
  export let width = image.largeWidth || "100%";
  export let height = image.largeHeight || "auto";
  export let srcset = image.srcset || "";
  export let sizes = image.sizes || "";
</script>

<img alt={caption} {src} {width} {height} {srcset} {sizes} />
