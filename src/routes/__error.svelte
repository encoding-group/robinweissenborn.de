<script>
   import Navigation from "$lib/ui/Navigation.svelte";
    import { url } from '@sveltech/routify'
</script>

<style>
  main {
    margin: 4rem 1.5rem;
  }
</style>

<Navigation />

<main>
  <h2>404. Page not found</h2>
  <a href={$url('/')}>&larr; Go back</a>
</main>
