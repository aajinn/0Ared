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
        width: 150px;
        background-color: #ffb6c1;
        padding: 10px;
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
        font-weight: bold;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
