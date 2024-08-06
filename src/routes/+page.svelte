
<script lang="ts">
    import type { IPost } from "$lib/entities/post";
    import { onMount } from "svelte";
	import Article from "../components/Article.svelte"
    import { myselfTracksStore } from "../store/lastFm";
	export let data: {posts: IPost[], lastFm: any};
	let scrollH = (e: any) => {
		if(e.type != 'wheel')
		{
			return;
		}
		let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
		delta = delta * (-100);
		//@ts-ignore
		document.querySelector("section#scroll-container").scrollLeft -= delta;    

		e.preventDefault();
	}


</script>


<style lang="scss">
section{
	display: flex;
	max-width: calc(90% + 4rem);
	margin: auto;
	overflow: hidden;
	overflow-x: scroll;
	scrollbar-color: var(--sky) var(--bg);
	scrollbar-width: thin;
	@media screen and ( max-width: 820px ){
		flex-direction: column;
		height: auto;
      }  }


</style>


<svelte:head>
	<title>Deep.Waves</title>
	<meta property="og:title" content="Deep.waves">
	<meta property="og:image" content="/iceberg.png">
	<meta property="og:description" content="Going deep into the iceberg of music....">
	<meta name="twitter:card" content="summary">
	<meta name="twitter:image"  content="/iceberg.png" />
	<meta property="og:image:secure_url"  content="/iceberg.png">
	<meta property="og:image:height" content="920">
	<meta property="og:image:width" content="920">
</svelte:head>



<section on:wheel={scrollH} id="scroll-container">
		{#each data.posts as post}
			<Article { post } />
		{/each}
</section>