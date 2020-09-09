<script>
  /* taken from https://github.com/borakilicoglu/svelte-marquee-text/blob/master/src/MarqueeTextWidget.svelte */

  import { onMount } from "svelte";

  export let duration = 10;
  export let repeat = 1;
  export let paused = true;

</script>

<style>
	.container {
		position: relative;
		overflow: hidden;
	}
	.container:after {
		content: '';
		position: absolute;
		width: 1em;
		height: 100%;
		background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
		right: 0;
		top: 0;
	}

  .text {
		margin-right: 2em;
		display: inline-block;
		animation-name: reset;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    white-space: nowrap;
  }
	.container:hover .text {
		animation-name: run;
  }
  @keyframes run {
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes reset {
    100% {
      transform: translateX(0);
    }
  }
</style>

<div class="container" class:paused>
	<div c<lass="text" style="animation-duration: {duration}s">
			<slot />
	</div>>
</div>
