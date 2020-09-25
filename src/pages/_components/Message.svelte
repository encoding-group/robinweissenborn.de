<style type="text/scss">
.message {
    width: 100%;
    height: 100vh;
    height: -webkit-fill-available;
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
