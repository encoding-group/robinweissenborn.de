<script>
  import { onMount } from "svelte";
  import Swipe from "swipejs";

  import Headline from "./Headline.svelte";

  export let rowData;

  let row;
  let swipeGallery;

  onMount(() => {
    swipeGallery = new Swipe(row, {
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
    position: relative;
    height: 100%;
  }
  .swipe-wrap {
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    position: relative;
  }
  .column {
    width: 100%;
    display: flex;
    .media {
      flex: 1;
      width: 100%;
      height: 100%;
      padding: 4.5rem 1.5rem;
      position: absolute;
      img {
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
    .nav {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      button {
        width: 100%;
      }
    }
  }
</style>

<div class="row">

  <Headline><h3>{rowData.headline}</h3></Headline>

  <div class="swipe" bind:this={row}>
    <div class="swipe-wrap">
      {#each rowData.media as column, key}
        <div class="column">
          <div class="media">
            <img src={column.media.large} alt="{column.media.caption}" />
            <figcaption>{key + 1}/{rowData.media.length}</figcaption>
          </div>
          <div class="nav">
            <button class="prev" on:click={swipeGallery.prev} />
            <button class="next" on:click={swipeGallery.next} />
          </div>
        </div>
      {/each}
    </div>
  </div>

</div>
