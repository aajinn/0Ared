<script>
    let navItems = [
        { href: "/", text: "Home" },
        { href: "/about", text: "About" },
        { href: "/contact", text: "Contact" },
    ];
</script>

<nav>
    {#each navItems as item}
        <a href={item.href}>{item.text}</a>
    {/each}
</nav>

<style>
    nav {
        background-color: #333;
        padding: 10px;
        text-align: center;
    }
    a {
        color: #ffffff;
        text-decoration: none;
        padding: 5px 15px;
        margin: 0 5px;
        font-family: Arial, sans-serif;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
