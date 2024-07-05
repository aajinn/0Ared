<script>
    let posts = [
        {
            title: "Welcome to My Blog!",
            date: "July 5, 2024",
            content:
                "Hello, World Wide Web! 👋 Welcome to my very first blog post! I'm so excited to share my thoughts with you all. Stay tuned for more awesome content!",
        },
        {
            title: "My Favorite Websites",
            date: "July 4, 2024",
            content:
                "Today, I want to share some of my favorite websites with you! Check out Geocities, Neopets, and Myspace. They're super cool! What are your favorite sites?",
        },
        {
            title: "Welcome to My Blog!",
            date: "July 5, 2024",
            content:
                "Hello, World Wide Web! 👋 Welcome to my very first blog post! I'm so excited to share my thoughts with you all. Stay tuned for more awesome content!",
        },
        {
            title: "My Favorite Websites",
            date: "July 4, 2024",
            content:
                "Today, I want to share some of my favorite websites with you! Check out Geocities, Neopets, and Myspace. They're super cool! What are your favorite sites?",
        },
        {
            title: "Welcome to My Blog!",
            date: "July 5, 2024",
            content:
                "Hello, World Wide Web! 👋 Welcome to my very first blog post! I'm so excited to share my thoughts with you all. Stay tuned for more awesome content!",
        },
        {
            title: "My Favorite Websites",
            date: "July 4, 2024",
            content:
                "Today, I want to share some of my favorite websites with you! Check out Geocities, Neopets, and Myspace. They're super cool! What are your favorite sites?",
        },
        {
            title: "Welcome to My Blog!",
            date: "July 5, 2024",
            content:
                "Hello, World Wide Web! 👋 Welcome to my very first blog post! I'm so excited to share my thoughts with you all. Stay tuned for more awesome content!",
        },
        {
            title: "My Favorite Websites",
            date: "July 4, 2024",
            content:
                "Today, I want to share some of my favorite websites with you! Check out Geocities, Neopets, and Myspace. They're super cool! What are your favorite sites?",
        },
    ];
</script>

<div class="blog-posts">
    {#each posts as post}
        <article>
            <h2>{post.title}</h2>
            <p class="date">Posted on {post.date}</p>
            <p>{post.content}</p>
            <div class="divider"></div>
        </article>
    {/each}
</div>

<style>
    .blog-posts {
        background-color: #ffffff;
        padding: 20px;
        border: 2px solid #ff69b4;
    }
    article {
        margin-bottom: 30px;
    }
    h2 {
        color: #ff1493;
        text-decoration: underline;
        font-size: 1.5em;
    }
    .date {
        font-style: italic;
        color: #808080;
    }
    .divider {
        height: 2px;
        background: linear-gradient(
            to right,
            #ff0000,
            #ff7f00,
            #ffff00,
            #00ff00,
            #0000ff,
            #8b00ff
        );
        margin: 20px 0;
    }

    @media (min-width: 768px) {
        h2 {
            font-size: 2em;
        }
    }
</style>
