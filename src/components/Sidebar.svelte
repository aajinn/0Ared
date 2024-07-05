<script>
    let links = [
        { href: "#", text: "My Neopets" },
        { href: "#", text: "Cool Backgrounds" },
        { href: "#", text: "Funny Gifs" },
        { href: "#", text: "Web Rings" },
    ];
</script>

<aside>
    <h3>🔥 Hot Links! 🔥</h3>
    <ul>
        {#each links as link}
            <li><a href={link.href}>{link.text}</a></li>
        {/each}
    </ul>
    <div class="counter">
        <p>Visitors:</p>
        <img src="/api/placeholder/80/20" alt="Visitor Counter" />
    </div>
</aside>

<style>
    aside {
        width: 200px;
        background-color: #98fb98;
        padding: 20px;
        border-left: 3px dotted #ff69b4;
    }
    h3 {
        color: #ff4500;
        text-align: center;
        text-decoration: underline;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin-bottom: 10px;
    }
    a {
        color: #0000ff;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    .counter {
        text-align: center;
        margin-top: 20px;
    }
</style>
