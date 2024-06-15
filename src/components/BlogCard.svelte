<script>
    export let cardInfo;

  const {title , description , url } = cardInfo;
</script>
<a href={url}>
    <article>

        <h3>{title}</h3>
        <p>{description}</p>
    </article>
</a>