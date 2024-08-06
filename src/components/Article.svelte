<article>
    <a rel='prefetch' href='posts/{post.slug}'><h1>{post.title}</h1>
        <img src={post.img} alt="">
    </a>
    <p>{post.summary}</p>
    <blockquote>
        {#each post.tags as tag}
            <i>{tag}</i>
        {/each}
    </blockquote>
</article>


<script lang="ts">
    import type { IPost } from '$lib/entities/post';
    import '../sass/article.sass'
    export let post:IPost;
</script>

<style lang="sass">


</style>