<script>
  import { isActive, url } from "@sveltech/routify";

  export let center = false;

</script>

<style type="text/scss">
  nav {
    animation: fadein 1s;
    position: fixed;
    z-index: 100;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    pointer-events: none;
    > div {
      pointer-events: auto;
      flex: 0 0 auto;
      padding: 1.5rem;
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
  .right {
    text-align: right;
  }
</style>

<nav class:center>

  <div class="left">
    {#if $isActive('/info')}
      <a title="Homepage" href={$url('/')}>Back</a>
    {:else}
      <a title="About" class="logo" href={$url('/info')}><span>Robin</span> Weißenborn</a>
    {/if}
  </div>

  {#if center}
    <div class="headline">
      <slot></slot>
    </div>
  {/if}

  <div class="right">
    {#if $isActive('/archive/index', true)}
      <a title="Homepage" href={$url('/')}>Back</a>
    {:else}
      <a title="Archive" href={$url('/archive')}>Archive</a>
    {/if}
  </div>

</nav>
