<script lang="ts">
	import { page } from '$app/stores';
	export let path: string;
	export let name: string;
</script>

<nav class="flex text-center text-md self-center mb-6 hover:text-white">
	<a href={path} class:active={$page.path === path} class="font-semibold">{name}</a>
</nav>

<style>
	a.active {
		@apply text-white;
	}
</style>
