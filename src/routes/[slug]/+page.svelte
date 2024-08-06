<script>
    import Article from "../../components/Article.svelte";
    import '../../sass/tags.sass'
    export let data;
    let { posts, actualTag } = data;
</script>

<svelte:head>
    <title>Deep.Waves - {actualTag[0].name}</title>
</svelte:head>

<h1>{actualTag[0].name}</h1>
<section>
    {#each posts as post}
        <Article {post} />
    {/each}
</section>
