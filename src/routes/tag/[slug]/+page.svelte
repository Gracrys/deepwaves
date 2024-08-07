<script lang="ts">
    import type { IPost } from "$lib/entities/post";
    import Article from "../../../components/Article.svelte";
    import '../../../sass/tags.sass'
    export let data:{posts: IPost[], actualTag: any}
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
