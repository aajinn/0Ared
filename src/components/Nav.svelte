<script>
    let navItems = [
        { href: "/", text: "Home" },
        { href: "/guestbook", text: "Guestbook" },
        { href: "#", text: "Links" },
        { href: "#", text: "About Me" },
    ];
</script>

<nav>
    <ul>
        {#each navItems as item}
            <li><a href={item.href}>{item.text}</a></li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        width: 100%;
        background-color: #ffb6c1;
        padding: 10px;
        box-sizing: border-box;
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
        font-weight: bold;
    }
    a:hover {
        text-decoration: underline;
    }

    @media (min-width: 768px) {
        nav {
            width: 150px;
        }
        ul {
            flex-direction: column;
        }
        li {
            margin-bottom: 10px;
        }
    }
</style>
