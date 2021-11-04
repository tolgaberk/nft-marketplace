module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: {
					default: 'var(--clr-primary)',
					dark: 'var(--clr-primary-dark)',
				},
				danger: {
					default: 'var(--clr-danger)',
				},
				link: {
					default: 'var(--clr-link)',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
