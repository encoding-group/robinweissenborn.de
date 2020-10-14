<script>
  export let image;
  import Image from "./Image.svelte";
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
  {#if typeof image === 'object'}
    <Image {image} />
  {:else}
    <div class="video">
      {@html image}
    </div>
  {/if}
</figure>
