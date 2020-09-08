<script>
  export let post = {};
</script>

<style type="text/scss">
    .item {
        display: flex;
        .col {
            padding: 0.25em 0.5em;
            flex: 1 1 auto;
            &.year {
                flex-basis: 10%;
            }
            &.title {
                flex-basis: 40%;
            }
            &.client {
                flex-basis: 25%;
            }
            &.discipline {
                flex-basis: 25%;
            }
        }
    }
</style>

<div class="item">
    <div class="col hover"></div>
    <p class="col year">{post.year}</p>
    <h3 class="col title">{post.title}</h3>
    <p class="col client">{post.client.length > 0 ? post.client.join(', ') : '—'}</p>
    <p class="col discipline">{post.discipline.length > 0 ? post.discipline.join(', ') : '—'}</p>
</div>