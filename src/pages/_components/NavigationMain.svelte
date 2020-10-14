<script>
  import { isActive, url } from "@sveltech/routify";
</script>

{#if $isActive('/info')}
  <a title="Go back to homepage" href={$url('/')}>Back</a>
{:else}
  <a title="About" class="logo" href={$url('/info')}><span>Robin</span> Weißenborn</a>
{/if}
