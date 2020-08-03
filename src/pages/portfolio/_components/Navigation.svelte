<script>
  import { isActive, url } from "@sveltech/routify";
</script>

<style type="text/scss">
  nav {
    position: sticky;
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
  </div>
  <div class="right">
    <a class:active={$isActive("./archive")} href={$url("./archive")}>Archive</a>
  </div>
</nav>
