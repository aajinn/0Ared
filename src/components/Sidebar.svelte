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
</aside>

<style>
    aside {
        width: 100%;
        background-color: #98fb98;
        padding: 20px;
        border-top: 3px dotted #ff69b4;
        box-sizing: border-box;
    }
    h3 {
        color: #ff4500;
        text-align: center;
        text-decoration: underline;
    }
    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    li {
        margin: 5px 10px;
    }
    a {
        color: #0000ff;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }

    @media (min-width: 768px) {
        aside {
            width: 200px;
            border-top: none;
            border-left: 3px dotted #ff69b4;
        }
        ul {
            flex-direction: column;
        }
        li {
            margin-bottom: 10px;
        }
    }
</style>
