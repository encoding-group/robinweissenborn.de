<script>
  import { getContext } from "svelte";

  const wpAdapter = getContext("WordpressAdapter");
  let data = {};
  wpAdapter.getSiteData((result) => {
    data = result;
    console.log(data);
  });
</script>

<h1>Info</h1>
