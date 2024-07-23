/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				antonio: ['Antonio', ...defaultTheme.fontFamily.sans],
				permanent: ['Permanent Marker', ...defaultTheme.fontFamily.sans],
				mulish: ['Mulish', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
