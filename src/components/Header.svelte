<script lang="typescript">
	import { createEventDispatcher, onMount } from "svelte";
	import "../sass/header.sass";
	import { myselfTracksStore } from "../store/lastFm";

	const dispatch = createEventDispatcher();

	function toggleMenu() {
		open = !open;
		dispatch("open", {
			open,
		});
	}

	let fadingOut = false;
	let currentIndex = 0;
	let words = ["Welcome...", "Gracrys says hello"];
	let currentTrack = "";
	let loaded = false;
	onMount(() => {
		const intervalId = setInterval(async () => {
			if (!fadingOut) {
				fadingOut = true;
				await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for fade out
				currentIndex = (currentIndex + 1) % words.length;
				fadingOut = false; // Reset flag after changing word
			}
		}, 4500);

		setTimeout(() => (loaded = true), 1000);

		return () => clearInterval(intervalId);
	});
	export let open: Boolean = false;

	$: {
		if (loaded) {
			currentTrack =
				"Listening to right now...: " +
				$myselfTracksStore.track[0].artist["#text"] +
				" - " +
				$myselfTracksStore.track[0].name;
			words = [...words, currentTrack];
		}
	}
</script>

<header class="header">
	<a href="/" class="logo-over" class:open
		><img src="/iceberg.png" alt="logo" class="logo" /></a
	>
	{#if loaded}
		<dialog class:open>
			<h2 class="fading" style="opacity: {fadingOut ? 0 : 1};">
				{words[currentIndex]}
			</h2>
		</dialog>
	{/if}

	<button class="menu btn" id="menu-btn" on:click={toggleMenu}>
		<img src="/icons/menu.svg" alt="menu" />
	</button>
</header>
