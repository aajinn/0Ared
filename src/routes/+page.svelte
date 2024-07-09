<script>
    import Meme from "../components/Meme.svelte";
</script>

<svelte:head>
    <title>ARed</title>
</svelte:head>
<main>
    <h1> ARed </h1>
    <p>I love code.</p>
    <p><a href="https://github.com/ARed99/">github</a></p>
    <h1> hey, ✌️ </h1>
    <p> discord : .ajin_v </p>
    <p>X : <a href="https://x.com/ChandyAjin/">@ChandyAjin</a></p>
    <Meme />
</main>

<style>
    main {
        padding: 2rem;
    }
    h1:hover,
    p:hover,
    a:hover {
        transform: scale(2);
        transition: 500ms all;
    }
</style>
