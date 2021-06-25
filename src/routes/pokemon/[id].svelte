<script lang="ts" context="module">
	export async function load({ page }) {
		const id = page.params.id;

		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

		const res = await fetch(url);
		const pokemon = await res.json();
		return {
			props: { pokemon }
		};
	}
</script>

<script lang="ts">
	export let pokemon;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center uppercase mb-6">{pokemon.name}</h1>
	<p>
		Type: <strong>{pokemon?.types[0].type.name}</strong> | Height: <strong>{pokemon.height}</strong>
		| Weight: <strong>{pokemon.weight}</strong>
	</p>
	<img src={pokemon.sprites['front_default']} alt={pokemon.name} />
</div>
