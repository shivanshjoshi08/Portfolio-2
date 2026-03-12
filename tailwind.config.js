const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Light theme — soft, warm, easy on the eyes
				'primary-light': '#F5F3EF',
				'secondary-light': '#FAF9F7',
				'ternary-light': '#EDEAE5',

				// Dark theme — Cinematic Warm
				'primary-dark': '#0e0c0a',
				'secondary-dark': '#1a1714',
				'ternary-dark': '#2c2620',

				// Accent — warm amber
				'accent': '#f59e0b',
				'accent-hover': '#d97706',
				'accent-light': '#fef3c7',
				'accent-dark': '#b45309',
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
	variants: {
		extend: { opacity: ['disabled'] },
	},
	plugins: ['@tailwindcss/forms'],
};
