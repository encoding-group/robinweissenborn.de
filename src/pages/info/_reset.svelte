<script>
   import NavigationMain from "../_components/NavigationMain.svelte";
   import NavigationArchive from "../_components/NavigationArchive.svelte";
</script>

<style type="text/scss">
    nav {
        animation: fadein 1s;
        div {
            position: fixed;
            z-index: 100;
            top: 0;
            width: 50%;
            @media only screen and (min-width: 920px) {
                width: 12.5%;
            }
            padding: 1.5rem;
            &.left {
                left: 0;
            }
            &.right {
                right: 0;
                text-align: right;
            }
        }
    }
</style>

<nav>
    <div class="left">
        <NavigationMain />
    </div>
    <div class="right">
        <NavigationArchive />
    </div>
</nav>

<slot />
