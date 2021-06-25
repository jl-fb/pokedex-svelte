import { writable } from 'svelte/store';
const URL = import.meta.env.VITE_BASE_URL;
const imageURL = import.meta.env.VITE_BASE_IMAGE_URL;
export const pokemon = writable([]);

(async () => {
	const res = await fetch(`${URL}`);
	const data = await res.json();

	const body = data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image: `${imageURL}/${index + 1}.png`
		};
	});
	pokemon.set(body);
})();
