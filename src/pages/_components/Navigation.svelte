<script>
  import { isActive, url } from "@sveltech/routify";

  let headline = false;
</script>

<style type="text/scss">
  nav.menu {
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100%;
    padding: 1.5rem;
    display: flex;
    > div {
      flex: 0 0 50%;
      &.right {
        text-align: right;
      }
    }
  }
  :global(body.nav-sticky) nav.menu {
    position: sticky !important;
  }
</style>

<nav class="menu">
  <div class="left">
    <a href={$isActive('./info') ? $url('/') : $url('./info')}>Robin Weißenborn</a>
    {#if headline !== false}
      <h1>{headline}</h1>
    {/if}
  </div>

  <div class="right"><a href={$url('./archive')}>Archive</a></div>
</nav>
