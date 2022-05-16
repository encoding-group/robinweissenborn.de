<script>
  import { onMount } from "svelte";
  import Swipe from "swipejs";

  import Headline from "./Headline.svelte";
  import Figure from "./Figure.svelte";

  export let gallery;

  console.log( gallery );

  let container;
  let swipeGallery;

  let first = true;
  let last = gallery.media.length === 1;
  let gi = 1;

  // https://swipe.js.org
  onMount(() => {
    swipeGallery = new Swipe(container, {
      draggable: true,
      continuous: false,
      callback: function(index, element) {
        console.log( index, gallery.media.length );
        first = index === 0;
        last = index + 1 === gallery.media.length;
        gi = index + 1;
      }
    });
  });
</script>

<style lang="scss">
  section.gallery {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
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
        cursor: url('../arrow-prev.png') 2 24, w-resize;
      }
      &.next {
        left: 50%;
        cursor: e-resize;
        cursor: url('../arrow-next.png') 22 24, e-resize;
      }
    }
  }
  .headline {
    flex: 0 0 auto;
    padding: 1.5rem;
    text-align: center;
  }
</style>

<section class="gallery" class:first class:last>

  <div class="swipe" bind:this={container}>
    <div class="swipe-wrap">
      {#each gallery.media as column, key}
        {#if column.media}
          <div>

            <Figure image={column.media} />

            <div class="nav-panels">
              {#if key > 0}
                <button title="Previous slide" class="prev" on:click={swipeGallery.prev} />
              {/if}
              {#if key + 1 < gallery.media.length}
                <button title="Next slide" class="next" on:click={swipeGallery.next} />
              {/if}
            </div>

          </div>
        {/if}
      {/each}
    </div>
  </div>

  <div class="headline">
    <h3>{gallery.headline}</h3>
    {#if gallery.media.length > 1}
      <p>{gi}/{gallery.media.length}</p>
    {/if}
  </div>

</section>
