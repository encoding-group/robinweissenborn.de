<script>
  import { url } from "@sveltech/routify";

  import ListItem from "./PostsListItem.svelte";

  export let posts = [];
</script>

<style type="text/scss">
  li {
    border-bottom: $border;
  }
</style>

<ul>
  {#each posts as post}
    <li>
      <a href={$url('../:slug', { slug: post.slug })}>
        <ListItem {post} />
      </a>
    </li>
  {/each}
</ul>
