<script>
  import { onMount } from "svelte";
  import Swipe from "swipejs";

  import Headline from "./Headline.svelte";
  import Figure from "./Figure.svelte";

  export let rowData;

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
  .row {
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

  .nav {
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
      }
      &.next {
        left: 50%;
      }
    }
  }
</style>

<div class="row">

  <Headline><h3>{rowData.headline}</h3></Headline>

  <div class="swipe" bind:this={container}>

    <div class="swipe-wrap">
      {#each rowData.media as column, key}
        <div>

          <Figure image={column.media}>
            <figcaption>{key + 1}/{rowData.media.length}</figcaption>
          </Figure>

          <div class="nav">
            <button class="prev" on:click={swipeGallery.prev} />
            <button class="next" on:click={swipeGallery.next} />
          </div>

        </div>
      {/each}
    </div>


  </div>

</div>
