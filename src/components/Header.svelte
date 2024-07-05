<script>
    let title = "ARed";
</script>

<header>
    <h1>{title}</h1>
    <p>🌟 Welcome to my corner of the World Wide Web! 🌟</p>
</header>

<style>
    header {
        background: linear-gradient(
            to right,
            #ff0000,
            #ff7f00,
            #ffff00,
            #00ff00,
            #0000ff,
            #8b00ff
        );
        color: #ffffff;
        padding: 20px;
        text-align: center;
        text-shadow: 2px 2px #000000;
    }
    h1 {
        font-size: 3em;
        margin: 0;
        animation: rainbow 5s infinite;
    }
    p {
        font-size: 1.2em;
        margin: 10px 0 0;
    }
    @keyframes rainbow {
        0% {
            color: #ff0000;
        }
        16% {
            color: #ff7f00;
        }
        33% {
            color: #ffff00;
        }
        50% {
            color: #00ff00;
        }
        66% {
            color: #0000ff;
        }
        83% {
            color: #8b00ff;
        }
        100% {
            color: #ff0000;
        }
    }
</style>
