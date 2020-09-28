<script>
  import { url } from "@sveltech/routify";
  import Marquee from "./Marquee.svelte";

  export let post = {};

  export let hover = false;
</script>

<style type="text/scss">
  .bubble span {
    width: 0.8em;
    height: 0.8em;
    display: inline-block;
    background-color: #fff;
    border-radius: 2em;
    opacity: 0;
    transition: opacity 400ms ease;
  }
  li {
    border-bottom: $border;
    :hover,
    &.hover {
      .bubble span {
        opacity: 1;
      }
    }
    a {
      display: block;
      display: flex;
      padding: 0 0.25em;
      .col {
        padding: 0.25em;
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

<li class:hover>
  <a href={$url('../:slug', { slug: post.slug })} >
    <p class="col year">{post.year}</p>

    <div class="col bubble"><span /></div>

    <h3 class="col title">
      <Marquee text={post.title} />
    </h3>

    <p class="col client">
      <Marquee text={post.client.length > 0 ? post.client.join(', ') : '—'} />
    </p>

    <p class="col discipline">
      <Marquee
        text={post.discipline.length > 0 ? post.discipline.join(', ') : '—'} />
    </p>
  </a>
</li>
