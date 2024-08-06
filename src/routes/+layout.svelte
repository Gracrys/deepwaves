<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import Header from '../components/Header.svelte';
    import "../sass/app.sass"
    import { onMount } from 'svelte';
    import { myselfTracksStore } from '../store/lastFm';

	 let open: boolean;
	 export let data: {lastFm: any}

	let toggleMenu = (e:any) => open = e.detail.open
	
onMount(() => {
    if (data.lastFm) {
		myselfTracksStore.set(data.lastFm);
    }
})
</script>

<style lang="sass" global>
	
</style>


<Nav {open}/>


<main>
	<Header on:open={toggleMenu}></Header>
	<slot></slot>
</main>