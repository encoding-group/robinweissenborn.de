<script>
  
  import { onMount } from "svelte";
  import Image from "./Image.svelte";
  import Marquee from "./Marquee.svelte";

  export let post = {};
  
  let observer;
  let element;
  let hover = false;
  let isIntersecting;

  onMount(()=>{
    observer = new IntersectionObserver((entries, observer)=>{
			entries.forEach(entry => {
        if( isIntersecting !== entry.isIntersecting ){
          isIntersecting = entry.isIntersecting;
          hover = isIntersecting;
        }
			});
		},{
			threshold: 1
		});
    observer.observe(element);
    return ()=>{
      observer.disconnect();
    };
  });

</script>

<li class:hover bind:this={element}>
  <a href="/portfolio/{post.slug}" title="{post.title}" sveltekit:prefetch
    on:touchstart={() => hover = true}
    on:touchend={() => hover = false}
    on:touchcancel={() => hover = false}
    on:mouseenter={() => hover = true}
    on:mouseleave={() => hover = false}
    >
    <figure>
      {#if post.secondaryTitleImage}
        <Image hide={hover} image={post.titleImage} fit={true} />
        <Image
          hide={!hover}
          image={post.secondaryTitleImage}
          lazyload={false} fit={true} />
      {:else}
        <Image image={post.titleImage} fit={true} />
      {/if}
    </figure>

    <div class="info">

      <h3 class="col title">
        {post.title}
      </h3>

    </div>
  </a>
</li>

<style lang="scss">
  li {
    .info {
      padding: 0.25rem 1.25rem 2rem;
      text-align: center;
    }
  }
  figure {
    padding: 0 0.5em;
    :global(img) {
      width: 100%;
      height: 56.25vw;
    }
  }
</style>