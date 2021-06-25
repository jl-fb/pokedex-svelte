const colors = require('tailwindcss/colors');
module.exports = {
	mode: 'jit',
	purge: ['./app.html', './src/**/*.{svelte,js,ts}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				teal: colors.teal,
				cyan: colors.cyan
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
