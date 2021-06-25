<script lang="ts">
	export let pokemon;
</script>

<a
	href={`/pokemon/${pokemon.id}`}
	class="flex flex-col p-3 text-center items-center justify-center shadow-sm hover:shadow-md rounded-md text-gray-600 bg-gray-100"
>
	<img class="w-40 h-40" src={pokemon.image} alt={pokemon.name} />
	<h1 class="font-bold uppercase text-lg">{pokemon.id}. {pokemon.name}</h1>
</a>
