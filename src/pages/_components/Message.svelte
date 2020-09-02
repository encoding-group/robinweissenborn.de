<style type="text/scss">
.message {
    width: 100%;
    height: 100vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    em {
        text-align: center;
    }
}
</style>

<li class="message">
    <em><slot>Loading posts...</slot></em>
</li>
