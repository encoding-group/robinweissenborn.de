<script>
  import { page } from '$app/stores';
</script>

<style lang="scss">
  nav {
    display: flex;
    flex-shrink: 0;
    flex-grow: 0;
    /* flex-basis: 3%; */
    z-index: 100;
    background-color: var(--background);
    border-bottom: $border;
    width: 100vw;
    > div {
      flex: 0 0 auto;
      width: 50%;
      &.left {
        border-right: $border;
      }
      &.right {
        text-align: right;
      }
    }
  }
  a {
    padding: 1.5rem;
  }
</style>

<nav>

  <div class="left">
    {#if $page.url.pathname === '/info'}
      <a title="Homepage" href="/" sveltekit:prefetch>Back</a>
    {:else}
      <a title="About" class="logo" href="/info" sveltekit:prefetch><span>Robin</span> Weißenborn</a>
    {/if}
  </div>

  <div class="right">
    {#if $page.url.pathname === '/archive'}
      <!-- <a title="Homepage" href="/" sveltekit:prefetch>Back</a> -->
    {:else}
      <a title="Index" href="/" sveltekit:prefetch>Index</a>
    {/if}
  </div>

</nav>
