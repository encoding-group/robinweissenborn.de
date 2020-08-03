<script>
  export let gallery;
  let currentRowIndex = 0;
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
  .box {
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
  }
  .invisible {
    display: none;
  }
</style>

<div id="gallery">
  {#each gallery as row, i}
    <div class="row">
      {#each row as column, j}
        <div class="box">
          <div class="media">
            <img src={column.media.large} alt="" />
          </div>
          <p>{j + 1}/{row.length}</p>
        </div>
      {/each}
    </div>
  {/each}
</div>
