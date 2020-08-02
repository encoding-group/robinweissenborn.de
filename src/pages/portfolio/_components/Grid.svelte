<script>
  import { url } from "@sveltech/routify";

  export let posts = [];
</script>

<style type="text/scss">
  ul {
    display: flex;
    flex-wrap: wrap;
    border-top: $border;
  }
  li {
    border-bottom: $border;
    flex: 0 0 50%;
    > a {
      display: block;
      padding: 0.5rem;
    }
    &:nth-child(odd) {
      border-right: $border;
    }
  }
</style>

<ul>
  {#each posts as post}
    <li>
      <a href={$url('../:post', { post: post.slug })}>
        <figure>
          <img
            alt="Nice poster"
            src={post.titleImage.large}
            width={post.titleImage.largeWidth}
            height={post.titleImage.largeHeight} />
        </figure>
      </a>
    </li>
  {/each}
</ul>
