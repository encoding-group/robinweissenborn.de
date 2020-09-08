<script>

  export let image;

  export let caption = image.caption || '';
  export let src = image.large || '';
  export let width = image.largeWidth || '100%';
  export let height = image.largeHeight || 'auto';
  
</script>

<img alt={caption}
  src={src}
  width={width}
  height={height} />
