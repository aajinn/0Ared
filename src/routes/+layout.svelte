<script>
    import { dev } from "$app/environment";
    import { inject } from "@vercel/analytics";
    inject({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <meta name="title" content="ARed" />
    <meta name="description" content="Simple programming tutorials." />
    <meta
        name="keywords"
        content="Programming tutorials,Coding tips,Software development,Learn to code,Programming languages,Code examples,Beginner programming,Advanced coding techniques,Debugging code,Code optimization,Python programming,JavaScript tutorials,Java development,C++ coding,Ruby on Rails,Go programming,Swift for iOS,Kotlin for Android,Rust language,PHP development,Frontend development,Backend development,Full-stack development,HTML and CSS,React.js tutorials,svelte,svelte kit,Vue.js development,Node.js coding,Django web framework,Web development projects,Responsive web design,"
    />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta name="author" content="AJin Varghese Chandy" />
    <meta property="og:title" content="ARed" />
    <meta property="og:type" content="text" />
    <meta property="og:url" content="https://ared.dev/" />
    <meta property="og:image" content="https://ared.dev/ared.png" />
</svelte:head>

<div id="container">
    <div id="content">
        <main>
            <slot />
        </main>
    </div>
    <footer> 2024 | ARed</footer>
</div>

<style>
    :global(body) {
        font-family: "Comic Sans MS", sans-serif;
        background-repeat: repeat;
        margin: 0;
        padding: 0;
        color: #000080;
    }

    #container {
        width: 100%;
        max-width: 800px;
        margin: 20px auto;
        background-color: #ffffff;
        box-sizing: border-box;
    }
    #content {
        display: flex;
        flex-direction: column;
    }
    main {
        flex: 1;
        padding: 20px;
        background-color: #ffffff;
        border-left: none;
    }

    @media (min-width: 768px) {
        #content {
            flex-direction: row;
        }
        main {
            border-top: none;
        }
    }
</style>
