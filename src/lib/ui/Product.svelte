<script>
  export let post;

  let to = 'info@robinweissenborn.de';
  let subject = `Order inquiry for ${post.title}`;
  let text = 'Dear Robin,'
    + '\n'
    + `\nI am interested in ordering a ${post.title} for ${post.price || '0'} € + shipping.`
    + '\nCould you drop me a mail with all required information?'
    + '\n'
    + '\nThank you';

  function encode(str){
    return encodeURIComponent(str);
  }

</script>

<div>
  {#if 'productInfo' in post}
    <p class="info">{post.productInfo}</p>
  {/if}
  <p class="price">Price: {post.price || '0'} € + shipping</p>
  <a title="Order via E-Mail" href="mailto:{to}?subject={encode(subject)}&body={encode(text)}">Order via E-Mail</a>
</div>

<style lang="scss">
  .price {
    margin: 1rem 0;
  }
  a {
    border-bottom: $border;
  }
</style>