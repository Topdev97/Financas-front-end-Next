/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				white_one: "#F8f8f8",
				white_two: "#f0f7da",
				white_three: "#f3f4f6",
				dark_green: "#019267",
				light_green: "#00C897",
				yellow: "#FFD365",
				gray: "rgba(255, 255, 255, 0.8)",
				medium_gray: "#9D9797",
				dark_gray: "#606060",
				dark_gray2: "#343434",
				dark_gray3: "#787888",
				gray3: "#7a7a7a",
				red: "#FF0F00",
			},
		},
	},
	plugins: [],
}
