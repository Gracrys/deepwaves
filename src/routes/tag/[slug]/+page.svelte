<script lang="ts">
    import type { IPost } from "$lib/entities/post";
    import Article from "../../../components/Article.svelte";
    import '../../../sass/tags.sass'
    export let data:{posts: IPost[], actualTag: any}

</script>

<svelte:head>
    <title>Deep.Waves - {data.actualTag.name}</title>
</svelte:head>

<h1>{data.actualTag.name}</h1>
<section>
    {#each data.posts as post}
        <Article {post} />
    {/each}
</section>
