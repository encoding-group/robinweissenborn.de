<script>
  export let slide;

  import Image from "./Image.svelte";

  let height;
</script>

<figure bind:offsetHeight={height}>
  {#if slide.type === 'Image'}
    <Image image={slide.media} />
  {:else}
    <div class="video" data-type={slide.type} style="width:{height*0.5625}px;">
      {@html slide.media}
    </div>
  {/if}
</figure>

<style lang="scss">
  figure {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    pointer-events: none;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    :global(img) {
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  .video {
    min-width: 50vw;
    height: 100%;
    position: relative;
    :global(iframe){
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: all;
    }
  }
</style>