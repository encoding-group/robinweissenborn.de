<script>
  
  import { page } from '$app/stores';

  export let center = false;

</script>

<nav class:center>

  <div class="left">
    {#if $page.url.pathname === '/info'}
      <a title="Homepage" href="/" sveltekit:prefetch>Back</a>
    {:else}
      <a title="About" class="logo" href="/info" sveltekit:prefetch><span>Robin</span> Weißenborn</a>
    {/if}
  </div>

  {#if center}
    <div class="headline">
      <slot></slot>
    </div>
  {/if}

  <div class="right">
    {#if $page.url.pathname === '/archive' }
      <!-- <a title="Homepage" href="/" sveltekit:prefetch>Back</a> -->
    {:else}
      <a title="Index" href="/" sveltekit:prefetch>Index</a>
    {/if}
  </div>

</nav>

<style lang="scss">
  nav {
    animation: fadein 1s;
    position: fixed;
    z-index: 100;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    pointer-events: none;
    color: #fff;
    mix-blend-mode: difference;
    > div {
      pointer-events: auto;
      flex: 0 0 auto;
      padding: 1.5rem;
      max-width: 30vw;
    }
    &.center {
      > div {
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 33.3%;
      }
    }
  }
  .headline {
    text-align: center;
  }
  .left {
    padding-right: 0.2rem;
  }
  .right {
    text-align: right;
    padding-left: 0.2em;
  }
  .headline {
    padding-left: 0;
    padding-right: 0;
  }
</style>