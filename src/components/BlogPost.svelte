<script>
    export let post;
</script>

<article>
    <h2>{post.title}</h2>
    <p class="date"
        >Posted on {new Date(post.created_at).toLocaleDateString()}</p
    >
    <p contenteditable="false" bind:innerHTML={post.content}>{post.content}</p>
    <div class="divider"></div>
</article>

<style>
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
