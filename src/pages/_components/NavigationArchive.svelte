<script>
  import { isActive, url } from "@sveltech/routify";
</script>

{#if $isActive('/archive/index', true)}
  <a title="Go back to homepage" href={$url('/')}>Back</a>
{:else}
  <a title="Archive" href={$url('/archive')}>Archive</a>
{/if}
