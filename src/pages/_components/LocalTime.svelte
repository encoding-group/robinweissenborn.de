<script>
  import { onMount } from "svelte";

  let time = new Date();

  // these automatically update when `time`
  // changes, because of the `$:` prefix
  $: hours = time.getHours();
  $: minutes = time.getMinutes();
  $: seconds = time.getSeconds();

  // https://svelte.dev/repl/a15e5bf484bf4eddafe68996d4235187?version=3.18.2
  const pad = (n) => (n < 10 ? `0${n}` : n);

  onMount(() => {
    const interval = setInterval(() => {
      time = new Date();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<span>{pad(hours)}:{pad(minutes)}:{pad(seconds)}</span>
