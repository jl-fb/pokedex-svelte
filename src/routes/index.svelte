<script lang="ts" context="module">
	export async function load({ page }) {
		const url = import.meta.env.VITE_BASE_URL;
		const imageURL = import.meta.env.VITE_BASE_IMAGE_URL;

		const resp = await fetch(`${url}`).then((res) => res.json());
		const pokemon = resp.results.map((data, index) => {
			const id = index + 1;
			return {
				id,
				name: data.name,
				image: `${imageURL}/${id}.png`
			};
		});
		return {
			props: { pokemon }
		};
	}
</script>

<script lang="ts">
	import PokemonCard from '$lib/components/PokemonCard.svelte';
	export let pokemon;
	let searchTerm: string = '';
	let filteredPokemon: any[] = [];

	$: {
		if (!searchTerm || searchTerm === '') {
			filteredPokemon = [...pokemon];
		}
		filteredPokemon = pokemon.filter((item) =>
			item.name.toLowerCase().startsWith(searchTerm.toLocaleLowerCase())
		);
	}
</script>

<svelte:head>
	<title>SvelteKit Pokedex</title>
</svelte:head>

<input
	class="p-4 rounded-md text-lg w-full bg-gray-100 hover:bg-gray-200"
	type="text"
	placeholder="Search Pokemon..."
	bind:value={searchTerm}
/>
<div class=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3">
	{#each filteredPokemon as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</div>
