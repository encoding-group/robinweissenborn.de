<script>
  import { url } from "@sveltech/routify";

  import Image from "./Image.svelte";

  export let posts = [];
</script>

<style type="text/scss">
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    border-bottom: $border;
    &:last-child,
    &:nth-last-child(2):nth-child(odd){
      border-bottom: none;
    }
    flex: 0 0 50%;
    > a {
      display: block;
      padding: 0.5rem;
    }
    &:nth-child(odd) {
      border-right: $border;
    }
  }
  figure {
    :global(img) {
      height: 14vw; /* 100 / 4 / 16 * 9 */
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
</style>

<ul>
  {#each posts as post}
    <li>
      <a href={$url('../:post', { post: post.slug })}>

        <figure>
          <Image image={post.titleImage} />
        </figure>
        
      </a>
    </li>
  {/each}
</ul>
