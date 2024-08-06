<script lang="ts">
    import type { IPost } from '$lib/entities/post';
	export let data: {post:IPost};
    const {post} = data
    import '../../../sass/post.sass'
</script>



<svelte:head>
	<title>{post.title}</title>
	<meta property="og:title" content="{post.title}">
	<meta property="og:image" content="{post.img}">
	<meta property="og:description" content="{post.summary}">
	<meta name="twitter:card" content="summary">
	<meta name="twitter:image" content="{post.img}" />
	<meta property="og:image:secure_url" content="{post.img}">
	<meta property="og:image:height" content="920">
	<meta property="og:image:width" content="920">
</svelte:head>

<article>

	<figure>

		<h1>{post.title}</h1>
		<img src="{post.img}" alt="">
		<figcaption>
			<blockquote>
			{#each post.tags as tag}
				<i>{tag}</i>
			{/each}
			</blockquote>
		</figcaption>
	</figure>

	<div class='content'>
		{@html post.html}
	</div>

</article>