<script>
  import Marquee from './Marquee.svelte';
  export let post = {};
  export let details = true;
</script>

<style type="text/scss">
    .item {
        display: flex;
        -webkit-user-select: none;
        user-select: none;
        .col {
            padding: 0.25em 0.25em;
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: auto;
            overflow: hidden;
            &.title {
                flex-grow: 1;
                flex-shrink: 1;
            }
            &.client,
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
        <Marquee text={post.title} />
    </h3>
    {#if details === true}
        <p class="col client">
            <Marquee text={post.client.length > 0 ? post.client.join(', ') : '—'} />
        </p>
        <p class="col discipline">
            <Marquee text={post.discipline.length > 0 ? post.discipline.join(', ') : '—'} />
        </p>
    {/if}
</div>
