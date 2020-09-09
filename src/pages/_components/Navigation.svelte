<script>
  import { isActive, url } from "@sveltech/routify";

  export let panels = false;

  let headline = false;
</script>

<style type="text/scss">
  nav.menu {
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100%;
    display: flex;
    > div {
      padding: 1.5rem;
      flex: 0 0 50%;
      &.right {
        text-align: right;
      }
    }
  }
  nav.panels {
    position: relative !important;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    border-bottom: $border;
    background-color: $black;
    .left {
      border-right: $border;
    }
  }
</style>

<nav class="menu" class:panels>
  <div class="left">
    <a href={$isActive('/info') ? $url('/') : $url('/info')}>Robin Weißenborn</a>
    {#if headline !== false}
      <h1>{headline}</h1>
    {/if}
  </div>

  <div class="right"><a href={$url('/archive')}>Archive</a></div>
</nav>
