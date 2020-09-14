<script>
  import { getContext } from "svelte";
  import { ready } from "@sveltech/routify";

  import TeaserItem from "./_components/TeaserItem.svelte";
  import Message from "./_components/Message.svelte";
</script>

<style type="text/scss">
  ul {
    scroll-snap-type: y mandatory;
    max-height: 100vh;
    overflow-y: scroll;
  }
</style>

<h1>test</h1>
