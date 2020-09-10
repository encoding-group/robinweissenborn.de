<script>
  /* taken from https://github.com/borakilicoglu/svelte-marquee-text/blob/master/src/MarqueeTextWidget.svelte */

  import { onMount } from "svelte";

  let container, text;
  let marquee = false;
  let hover = false;

  let offset = 0;

  function dimensions(){
    let v = container.clientWidth;
    let w = text.clientWidth;
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
	.container {
		position: relative;
		overflow: hidden;
	}
	.container.marquee:after {
		content: '';
		position: absolute;
		width: 1em;
		height: 100%;
		background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
		right: 0;
		top: 0;
	}
  .text {
		display: inline-block;
    white-space: nowrap;
    transform: translateX(0);
    transition-timing-function: linear;
    transition-property: transform;
    transition-duration: 200ms;
  }
</style>

<div class="container" bind:this={container} class:marquee on:mouseover={()=> hover = true} on:mouseout={()=> hover = false}>
	<div bind:this={text} class="text" style="{hover ? `transform: translateX(${offset}px); transition-duration: ${-offset*10}ms;` : ''}">
    <slot />
	</div>
</div>
