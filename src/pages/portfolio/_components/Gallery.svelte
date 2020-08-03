<script>
  import GalleryRow from "./GalleryRow.svelte";

  export let gallery;
</script>

<div id="gallery">
  {#each gallery as row, i}
    <GalleryRow rowData={row} rowIndex={i} />
  {/each}
</div>
