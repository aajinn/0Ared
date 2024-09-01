<script>
    import { marked } from "marked";
    import { onMount, tick } from "svelte";
    export let data;
    const post = data.data;
    let html;
    let content = marked(post.content);
    console.log(content);
    onMount(() => {
        document.querySelector(".markdown").innerHTML = content;
    });
</script>

<svelte:head>
    <title>
        {post.title}
    </title>
</svelte:head>

<div bind:this={html} class="markdown"> </div>
