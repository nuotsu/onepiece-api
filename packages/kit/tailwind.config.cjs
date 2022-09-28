/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			colors: {
				ink: '#000',
				paper: '#fff',
				accent: '#d73332',
				bounty: '#f4efe6',
			}
		},
	},
	plugins: [],
}
