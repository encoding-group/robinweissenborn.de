<style type="text/scss">
.message {
    width: 100%;
    height: 100vh;
    height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadein 1s;
    color: #555;
    em {
        text-align: center;
    }
}
</style>

<li class="message">
    <em><slot>Loading ...</slot></em>
</li>
