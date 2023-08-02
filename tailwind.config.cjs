/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", "Inter", defaultTheme.fontFamily.sans],
				display: ["Trade Winds", "InterVariable", "Inter", defaultTheme.fontFamily.sans],
				mono: ["JetBrains Mono Variable", defaultTheme.fontFamily.mono]
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
