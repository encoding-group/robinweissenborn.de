<script>
  import { url } from "@sveltech/routify";

  export let post = [];
</script>

<style type="text/scss">
    li {
        height: 100vh;
        > a {
            height: 100%;
            display: block;
            display: flex;
            flex-direction: column;
        }
    }
    .title {
        padding: 1.5rem;
        text-align: center;
    }
    figure {
        padding: 0 1.5rem 4.5rem;
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
        <div class="title">
            <h3>{post.title}</h3>
        </div>
        {#if 'titleImage' in post}
            <figure>
                <img alt="{post.titleImage.caption}" src="{post.titleImage.full}" />
            </figure>
        {/if}
    </a>

</li>
