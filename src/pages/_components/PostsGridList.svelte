<script>
  import { url } from "@sveltech/routify";

  import Image from "./Image.svelte";
  import ListItem from "./PostsListItem.svelte";

  export let posts = [];
</script>

<style type="text/scss">
  ul {
    li {
      margin-bottom: 1rem;
      > a {
        display: block;
      }
    }
  }
  figure {
    padding: 0 0.5em;
  }
</style>

<ul>
  {#each posts as post}
    <li>
      <a href={$url('../:slug', { slug: post.slug })}>

        <figure>
          <Image image={post.titleImage} />
        </figure>

        <ListItem {post} />
      </a>
    </li>
  {/each}
</ul>
