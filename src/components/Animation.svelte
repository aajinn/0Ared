<script>
    import { fade, fly, scale, blur } from "svelte/transition";
    import { elasticOut } from "svelte/easing";

    let isHovered = false;
    let currentAnimation = 0;
    const animations = ["fade", "fly", "scale", "blur"];

    function handleMouseEnter() {
        isHovered = true;
        currentAnimation = (currentAnimation + 1) % animations.length;
    }

    function handleMouseLeave() {
        isHovered = false;
    }

    $: animationProps = {
        fade: { duration: 300 },
        fly: { y: 20, duration: 300, easing: elasticOut },
        scale: { start: 0.8, duration: 300 },
        blur: { amount: 5, duration: 300 },
    };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="animation-container"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
>
    {#if isHovered}
        <h1> hey, ✌️ </h1>
        <p> discord : .ajin_v </p>
    {:else}
        <h1>Hover me!</h1>
    {/if}
</div>

<style>
    .animation-container {
        width: 200px;
        height: 200px;
        background-color: #ffffff;
        border-radius: 8px;
        cursor: pointer;
        font-family: Arial, sans-serif;
        font-size: 18px;
        color: #333;
        margin: 20px 0px 20px;
        border: 2px solid grey;
        border-style: dashed;
        text-align: center;
    }
</style>
