<script>
    let posts = [
        {
            title: "The Art of Classic Web Design",
            date: "July 5, 2024",
            author: "Jane Doe",
            content:
                "In the ever-evolving world of web design, there's something to be said for the classic approach. Clean lines, readable typography, and a focus on content have always been the hallmarks of good design. This article explores how these principles continue to shape the web today.",
        },
        {
            title: "Responsive Design: A Modern Classic",
            date: "July 4, 2024",
            author: "John Smith",
            content:
                "While 'responsive design' might seem like a modern concept, its roots lie in the classic principle of universal access. We'll examine how this approach embodies timeless design philosophies while addressing contemporary needs.",
        },
    ];
</script>

<div class="main-content">
    {#each posts as post}
        <article>
            <h2>{post.title}</h2>
            <p class="meta">Posted on {post.date} by {post.author}</p>
            <p>{post.content}</p>
            <a href="#" class="read-more">Read More</a>
        </article>
    {/each}
</div>

<style>
    .main-content {
        flex: 1;
        padding-right: 20px;
    }
    article {
        margin-bottom: 30px;
        border-bottom: 1px solid #ddd;
        padding-bottom: 20px;
    }
    h2 {
        color: #1a1a1a;
        margin-bottom: 10px;
    }
    .meta {
        font-style: italic;
        color: #666;
    }
    .read-more {
        display: inline-block;
        margin-top: 10px;
        color: #1a1a1a;
        text-decoration: none;
        font-weight: bold;
    }
    .read-more:hover {
        text-decoration: underline;
    }
</style>
