<script>
  export let image;
  import Image from "./Image.svelte";
</script>

<style lang="scss">
  figure {
    width: 100%;
    height: 100%;
    padding: 3.8rem 1.5rem;
    position: absolute;

    :global(img) {
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }

    figcaption {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 1.5rem;
      text-align: center;
    }
  }
  .video {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
  <figcaption>
    <slot />
  </figcaption>
</figure>
