<script>
    import { onMount } from "svelte";
    import { blogStore } from "$lib/blogstore";
    import Sidebar from "../components/Sidebar.svelte";
    import BlogPost from "../components/BlogPost.svelte";
    onMount(() => {
        blogStore.fetchPosts();
    });
</script>

<svelte:head>
    <title>ARed</title>
</svelte:head>

<div class="home">
    {#each $blogStore as post}
        <BlogPost {post} />
    {/each}
</div>

<Sidebar />
