<script>
  export let rowData;
  export let rowIndex;

  let row;

  function handleNext(event) {
    const column = event.target.closest(".column");
    const columnIndex = parseInt(column.dataset.index, 10);
    const columnWidth = window.innerWidth;
    row.scrollLeft = (columnIndex + 1) * columnWidth;
  }

  function handlePrevious(event) {
    const column = event.target.closest(".column");
    const columnIndex = parseInt(column.dataset.index, 10);
    const columnWidth = window.innerWidth;
    row.scrollLeft = (columnIndex - 1) * columnWidth;
  }
</script>

<style lang="scss">
  .row {
    display: flex;
    scroll-behavior: smooth;
    flex-direction: row;
    height: 100vh;
    width: 100%;
    overflow: auto;
    overflow-y: hidden;
  }
  .column {
    width: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .media {
      padding: 2rem;
      width: 75%;
      img {
        object-fit: scale-down;
      }
    }
  }
</style>

<div class="row" bind:this={row} data-index={rowIndex}>
  {#each rowData as column, key}
    <div class="column" data-index={key}>
      <div class="media">
        <img src={column.media.large} alt="" />
      </div>
      <p>{key + 1}/{rowData.length}</p>
      <div class="nav">
        <button class="nav-button" on:click={handlePrevious}>prev</button>
        <button class="nav-button" on:click={handleNext}>next</button>
      </div>
    </div>
  {/each}
</div>
