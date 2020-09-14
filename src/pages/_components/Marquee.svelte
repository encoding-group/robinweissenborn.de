<script>
  /* taken from https://github.com/borakilicoglu/svelte-marquee-text/blob/master/src/MarqueeTextWidget.svelte */

  import { onMount } from "svelte";

  export let text = "—";

  let outer, inner;
  let marquee = false;
  let hover = false;

  let offset = 0;

  function dimensions(){
    let v = outer.clientWidth;
    let w = inner.clientWidth;
    offset = Math.min(0, (v-w-10));
    marquee = v < w;
    return marquee;
  }
	onMount(() => {
    dimensions();
    setTimeout(function(){
      dimensions();
    }, 100);
  });

</script>

<style>
	.outer {
		position: relative;
		overflow: hidden;
	}
	.outer.marquee:after {
		content: '';
		position: absolute;
		width: 1em;
		height: 100%;
		background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
		right: 0;
		top: 0;
	}
  .inner {
		display: inline-block;
    white-space: nowrap;
    transform: translateX(0);
    transition-timing-function: linear;
    transition-property: transform;
    transition-duration: 200ms;
  }
</style>

<div class="outer" title={text} bind:this={outer} class:marquee on:mouseover={()=> hover = true} on:mouseout={()=> hover = false}>
	<div bind:this={inner} class="inner" style="{hover ? `transform: translateX(${offset}px); transition-duration: ${-offset*10}ms;` : ''}">
    {text}
	</div>
</div>
