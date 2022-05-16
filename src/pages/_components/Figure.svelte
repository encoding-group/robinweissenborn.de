<script>
  export let slide;

  import Image from "./Image.svelte";

  console.log('gallery slide', slide);
</script>

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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    :global(iframe){
      pointer-events: all;
    }
  }
</style>

<figure>
  {#if slide.type === 'Image'}
    <Image image={slide.media} />
  {:else}
    <div class="video" data-type={slide.type}>
      {@html slide.media}
    </div>
  {/if}
</figure>
