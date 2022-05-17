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
      <!-- <a title="Homepage" href={$url('/')}>Back</a> -->
    {:else}
      <a title="Index" href={$url('/')}>Index</a>
    {/if}
  </div>

</nav>
