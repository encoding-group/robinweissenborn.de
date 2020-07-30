<script>
  import { isActive, url } from "@sveltech/routify";
  const links = [
    ["./index", "Home"],
    ["./info", "Info"],
    ["./imprint", "Imprint"],
    ["./archive", "Archive"],
  ];
</script>

<nav>
  {#each links as [path, name]}
    <a class:active={$isActive(path)} href={$url(path)}>{name}</a>
  {/each}
</nav>
