<script>
  import { url } from "@sveltech/routify";

  import Headline from "./Headline.svelte";

  export let post = [];
</script>

<style type="text/scss">
    li {
        height: 100vh;
        > a {
            height: 100%;
            display: flex;
            position: relative;
            :global(.headline) {
                position: absolute;
                top: 0;
            }
        }
    }
    figure {
        padding: 4.5rem 1.5rem;
        @media only screen and (max-height: 600px) {
            padding-bottom: 1.5rem;
        }
        flex: 1;
        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
            object-position: center;
        }
    }
</style>

<li class="post">

    <a href={$url('../archive/:post', { post: post.slug })}>
        <Headline><h3>{post.title}</h3></Headline>
        {#if 'titleImage' in post}
            <figure>
                <img alt="{post.titleImage.caption}" src="{post.titleImage.full}" />
            </figure>
        {/if}
    </a>

</li>
