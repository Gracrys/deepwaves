<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import Header from '../components/Header.svelte';
    import "../sass/app.sass"

	 let open: boolean;

	let toggleMenu = (e:any) => open = e.detail.open
</script>

<style lang="sass" global>
	
</style>

<Nav {open}/>

<main>
	<Header on:open={toggleMenu}></Header>
	<slot></slot>
</main>