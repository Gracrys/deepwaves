<script lang="typescript">
import { createEventDispatcher } from 'svelte'
import '../sass/header.sass'

const dispatch = createEventDispatcher();

	function toggleMenu() {

		open = !open
		dispatch('open', {
			open
		});
	}
	export let open : Boolean = false;
</script>
<header class="header">
	<a href="/" class="logo-over" class:open><img src="/iceberg.png" alt="logo" class="logo" ></a>
	<dialog class:open>
		<h2>Welcome...</h2>
	</dialog>
	<button class="menu btn" id="menu-btn" on:click={toggleMenu}>
		<img src="/icons/menu.svg" alt="menu">
	</button>
</header>