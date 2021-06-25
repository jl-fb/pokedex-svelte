<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<div class="flex flex-col h-full w-screen bg-gradient-to-r from-yellow-600 to-red-500 ">
	<Header title="P0KED3X" />
	<Nav name="Home" path="/" />
	<main class="container m-auto"><slot /></main>
	<footer>footer</footer>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
