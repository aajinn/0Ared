<script>
    let categories = ["Web Design", "Typography", "Usability", "Accessibility"];
    let recentPosts = [
        "The Future of CSS",
        "JavaScript: Then and Now",
        "The Importance of Web Standards",
    ];
</script>

<aside>
    <section>
        <h3>Categories</h3>
        <ul>
            {#each categories as category}
                <li><a href="#">{category}</a></li>
            {/each}
        </ul>
    </section>
    <section>
        <h3>Recent Posts</h3>
        <ul>
            {#each recentPosts as post}
                <li><a href="#">{post}</a></li>
            {/each}
        </ul>
    </section>
</aside>

<style>
    aside {
        width: 250px;
        padding-left: 20px;
        border-left: 1px solid #ddd;
    }
    h3 {
        color: #1a1a1a;
        border-bottom: 2px solid #1a1a1a;
        padding-bottom: 5px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin-bottom: 10px;
    }
    a {
        color: #1a1a1a;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
