<script context="module">
	export async function load({ fetch }) {
		const posts = await fetch(`/intro.json`)
			.then((response) => response.json())
		return { props: { posts } };
	}
</script>

<script>

  import TeaserItem from "$lib/ui/TeaserItem.svelte";

  export let posts;

</script>

<svelte:head>
  <title>Robin Weißenborn</title>
</svelte:head>

<ul>
  {#each posts as post}
    <TeaserItem {post} />
  {/each}
</ul>

<style lang="scss">
  @media (hover: hover) and (pointer: fine) {
    @supports (scroll-snap-type: y mandatory) {
      ul {
        scroll-snap-type: y mandatory;
        overflow-y: auto;
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;
        :global( li ){
          scroll-snap-align: start;
        }
      }
    }
  }
</style>