<script>
  import { isActive, url } from "@sveltech/routify";
</script>

<style type="text/scss">
  nav {
    display: flex;
    z-index: 100;
    background-color: $black;
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
    {#if $isActive('/info')}
      <a title="Homepage" href={$url('/')}>Back</a>
    {:else}
      <a title="About" class="logo" href={$url('/info')}><span>Robin</span> Weißenborn</a>
    {/if}
  </div>

  <div class="right">
    {#if $isActive('/archive/index', true)}
      <a title="Homepage" href={$url('/')}>Back</a>
    {:else}
      <a title="Archive" href={$url('/archive')}>Archive</a>
    {/if}
  </div>

</nav>
