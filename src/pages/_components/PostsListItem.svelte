<script>
  import Marquee from './Marquee.svelte';
  export let post = {};
</script>

<style type="text/scss">
    .item {
        display: flex;
        -webkit-user-select: none;
        user-select: none;
        .col {
            padding: 0.25em 0.25em;
            flex: 1 1 auto;
            overflow: hidden;
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
    <h3 class="col title">
        <Marquee>{post.title}</Marquee>
    </h3>
    <p class="col client">
        <Marquee>{post.client.length > 0 ? post.client.join(', ') : '—'}</Marquee>
    </p>
    <p class="col discipline">
        <Marquee>{post.discipline.length > 0 ? post.discipline.join(', ') : '—'}</Marquee>
    </p>
</div>
