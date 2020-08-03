<script>
  export let gallery;
  let currentRowIndex = 0;

  function handleNext(event) {
    const row = event.target.closest(".row");
    row.scrollLeft = row.scrollLeft + window.innerWidth;
  }
  function handlePrevious(event) {
    const row = event.target.closest(".row");
    row.scrollLeft = row.scrollLeft - window.innerWidth;
  }
</script>

<style lang="scss">
  .row {
    display: flex;
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
      width: 50%;
      img {
        object-fit: scale-down;
      }
    }
    nav {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      .nav-button {
        width: 50%;
      }
    }
  }
</style>

<div id="gallery">
  {#each gallery as row, i}
    <div class="row">
      {#each row as column, j}
        <div class="column">
          <div class="media">
            <img src={column.media.large} alt="" />
          </div>
          <p>{j + 1}/{row.length}</p>
          <nav>
            <button class="nav-button" on:click={handlePrevious} />
            <button class="nav-button" on:click={handleNext} />
          </nav>
        </div>
      {/each}
    </div>
  {/each}
</div>
