<script>
  import { onMount } from "svelte";
  import Swipe from "swipejs";

  import Headline from "./Headline.svelte";
  import Figure from "./Figure.svelte";

  export let gallery;

  let container;
  let swipeGallery;

  let first = true;
  let last = gallery.media.length === 1;

  // https://swipe.js.org
  onMount(() => {
    swipeGallery = new Swipe(container, {
      draggable: true,
      continuous: false,
      callback: function(index, element) {
        console.log( index, gallery.media.length );
        first = index === 0;
        last = index + 1 === gallery.media.length;
      }
    });
  });
</script>

<style lang="scss">
  .nav-buttons {
    button {
      width: 1rem;
      height: 1rem;
      border-top: 1px solid #fff;
      border-left: 1px solid #fff;
      position: absolute;
      bottom: 1.5rem;
      opacity: 1;
      transition: opacity 400ms ease;
      &.prev {
        left: 1.5rem;
        transform: rotate(-45deg);
      }
      &.next {
        right: 1.5rem;
        transform: rotate(135deg);
      }
    }
  }
  section.gallery {
    height: 100vh;
    height: -webkit-fill-available;
    width: 100%;
    position: relative;
    :global(.headline) {
      position: absolute;
      top: 0;
    }
    &.first {
      .nav-buttons button.prev {
        opacity: 0;
      }
    }
    &.last {
      .nav-buttons button.next {
        opacity: 0;
      }
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

  .nav-panels {
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
      &.prev {
        left: 0;
        cursor: w-resize;
      }
      &.next {
        left: 50%;
        cursor: e-resize;
      }
    }
  }
</style>

<section class="gallery" class:first class:last>
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

            <div class="nav-panels">
              {#if key > 0}
                <button class="prev" on:click={swipeGallery.prev} />
              {/if}
              {#if key + 1 < gallery.media.length}
                <button class="next" on:click={swipeGallery.next} />
              {/if}
            </div>

          </div>
        {/if}
      {/each}
    </div>
  </div>

  <div class="nav-buttons">
    <button class="prev" on:click={swipeGallery.prev} />
    <button class="next" on:click={swipeGallery.next} />
  </div>

</section>
