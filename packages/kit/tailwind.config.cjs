/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				sans: `'M PLUS 1', sans-serif`,
			},
			colors: {
				ink: '#000',
				paper: '#fff',
				accent: '#d73332',
				bounty: '#f4e8d2',
			},
			screens: {
				'xs': { min: '480px' },
				'<xs': { max: '479px' },
				'<sm': { max: '639px' },
				'<md': { max: '767px' },
				'<lg': { max: '1023px' },
				'<xl': { max: '1279px' },
				'<2xl': { max: '1535px' }
			}
		},
	},
	plugins: [],
}
