<script>
  import GalleryRow from "./GalleryRow.svelte";

  export let gallery;
</script>

<div id="gallery">
  {#each gallery as row}
    <GalleryRow rowData={row} />
  {/each}
</div>
