<script>
  import { url } from "@sveltech/routify";
  import Marquee from './Marquee.svelte';

  export let post = {};
</script>

<style type="text/scss">
  li {
    border-bottom: $border;
    a {
      display: block;
      display: flex;
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
  }
</style>

<li>
  <a href={$url('../:slug', { slug: post.slug })}>

    <p class="col year">{post.year}</p>

    <div class="col hover"></div>

    <h3 class="col title">
      <Marquee text={post.title} />
    </h3>

    <p class="col client">
      <Marquee text={post.client.length > 0 ? post.client.join(', ') : '—'} />
    </p>

    <p class="col discipline">
      <Marquee text={post.discipline.length > 0 ? post.discipline.join(', ') : '—'} />
    </p>

  </a>
</li>
