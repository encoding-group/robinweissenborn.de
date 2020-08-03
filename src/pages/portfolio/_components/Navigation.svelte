<script>
  import { isActive, url } from "@sveltech/routify";

  export let prefix = "..";
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
    <a class:active={$isActive(`${prefix}/index`)} href={$url(`${prefix}/index`)}>Robin Weißenborn</a>
  </div>
  <div class="right">
    <a class:active={$isActive(`${prefix}/archive`)} href={$url(`${prefix}/archive`)}>Archive</a>
  </div>
</nav>
