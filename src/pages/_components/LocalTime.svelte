<script>
	import { onMount } from 'svelte';

	let time = new Date();

	$: hours = time.getHours();
	$: minutes = time.getMinutes();
	$: seconds = time.getSeconds();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<style>
  div {
    text-align: center;
    margin: 1.5em 0;
    display: inline-block;
  }
  p {
    margin-top: 0.5em;
  }
	svg {
		width: 40px;
		height: 40px;
	}
	circle, line {
		stroke: #fff;
		fill: none;
		stroke-width: 5px;
	}
</style>

<div>

  <svg viewBox='-110 -110 220 220'>
    <circle class='clock-face' r='100'/>
    <line class='hour'
      y1='0'
      y2='-70'
      transform='rotate({30 * hours + minutes / 2})'
    />
    <line class='minute'
      y1='0'
      y2='-100'
      transform='rotate({6 * minutes + seconds / 10})'
    />
    <line class='second'
      y1='0'
      y2='-100'
      transform='rotate({6 * seconds})'
    />
  </svg>

  <p>Kleinosterhausen</p>

</div>
