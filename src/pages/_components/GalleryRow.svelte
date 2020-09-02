<script>
  import { onMount } from "svelte";
  import Swipe from "swipejs";

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
    h3 {
      padding: 1.5rem;
      text-align: center;
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
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .media {
      padding: 2rem;
      width: 75%;
      max-height: 80%;
      img {
        object-fit: scale-down;
        max-height: 100%;
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
  <h3>{rowData.headline}</h3>
  <div class="swipe" bind:this={row}>
    <div class="swipe-wrap">
      {#each rowData.media as column, key}
        <div class="column">
          <div class="media">
            <img src={column.media.large} alt="" />
          </div>
          <p>{key + 1}/{rowData.media.length}</p>
          <div class="nav">
            <button class="prev" on:click={swipeGallery.prev} />
            <button class="next" on:click={swipeGallery.next} />
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
