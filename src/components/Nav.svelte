<script lang="ts">
	import { tags } from "../store/tags.js"
	import '../sass/nav.sass'
	// export let segment;
	export let open = false;
</script>

<aside class="sidebar-menu" class:open>
	<header>
		<a href="/" class="logo-over">
			<img src="/iceberg.png" alt="logo" class="logo">
			<h2>deep waves</h2>
			<i>Going deep into the iceberg of the music...</i>
		</a>
	</header>

	<nav>
		<ul>
			{#each tags as tag}
				<li><a sapper:prefetch rel=prefetch href="{tag.slug+ "/"}" >{tag.name }</a></li>
			{/each}

			<!-- <li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
			<li><a aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a></li>

			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				the blog data when we hover over the link or tap it on a touchscreen -->
			<!-- <li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li> -->
		</ul>
		<footer>
		
			<a href="">about</a>
		</footer>
	</nav>

</aside>