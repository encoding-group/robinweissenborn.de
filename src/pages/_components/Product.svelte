<script>

  export let post;

</script>

<style type="text/scss">
    .price {
        margin: 1rem 0;
    }
    a {
        border-bottom: $border;
    }
</style>

<div>
    {#if post.productInfo}
        <p class="info">{post.productInfo}</p>
    {/if}
    {#if post.price}
        <p class="price">{post.price} €</p>
    {/if}
    <a href="mailto:e@mail.com">(( Placeholder Link ))</a>
</div>
