<script>
  import { isActive, url } from "@sveltech/routify";

  let headline = false;
</script>

<style type="text/scss">
  nav {
    position: fixed;
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
</style>

<nav>
  <div class="left">
    <a class:active={$isActive("./index")} href={$url("./index")}>Robin Weißenborn</a>
    {#if headline !== false}
      <h1>{headline}</h1>
    {/if}
  </div>
  <div class="right">
    <a class:active={$isActive("./archive")} href={$url("./archive")}>Archive</a>
  </div>
</nav>
