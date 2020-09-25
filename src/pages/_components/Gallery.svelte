<script>
  import { onMount } from "svelte";
  import Swipe from "swipejs";

  import Headline from "./Headline.svelte";
  import Figure from "./Figure.svelte";

  export let gallery;

  let container;
  let swipeGallery;

  // https://swipe.js.org
  onMount(() => {
    swipeGallery = new Swipe(container, {
      draggable: true,
      continuous: false,
    });
  });
</script>

<style lang="scss">
  section.gallery {
    height: 100vh;
    width: 100%;
    position: relative;
    :global(.headline) {
      position: absolute;
      top: 0;
    }
  }

  .swipe {
    overflow: hidden;
    visibility: hidden;
    position: relative;
    height: 100%;

    .swipe-wrap {
      overflow: hidden;
      position: relative;
      height: 100%;

      > div {
        height: 100%;
        float: left;
        width: 100%;
        position: relative;
      }
    }
  }

  .nav-buttons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    button {
      position: absolute;
      width: 50%;
      top: 0;
      height: 100%;
      &:after {
        content: '';
        width: 1rem;
        height: 1rem;
        border-top: 1px solid #fff;
        border-left: 1px solid #fff;
        position: absolute;
        bottom: 1.5rem;
      }
      &.prev {
        left: 0;
        cursor: w-resize;
        &:after {
          left: 1.5rem;
          transform: rotate(-45deg);
        }
      }
      &.next {
        left: 50%;
        cursor: e-resize;
        &:after {
          right: 1.5rem;
          transform: rotate(135deg);
        }
      }

    }
  }
</style>

<section class="gallery">
  <Headline>
    <h3>{gallery.headline}</h3>
  </Headline>

  <div class="swipe" bind:this={container}>
    <div class="swipe-wrap">
      {#each gallery.media as column, key}
        {#if column.media}
          <div>
            <Figure image={column.media}>
              <figcaption>{key + 1}/{gallery.media.length}</figcaption>
            </Figure>

            <div class="nav-buttons">
              <button class="prev" on:click={swipeGallery.prev} />
              <button class="next" on:click={swipeGallery.next} />
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>
