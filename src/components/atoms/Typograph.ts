import { w } from "windstitch"

export const H1 = w.h1(`font-[700]`, {
	variants: {
		color: {
			white: "text-white",
			dark_gray: "text-dark_gray",
		},
		size: {
			base: "text-[2.5rem]",
		},
	},
	defaultVariants: {
		size: "base",
		color: "white",
	},
})

export const Paragraph = w.p(`font-bold`, {
	variants: {
		color: {
			white: "text-gray",
			yellow: "text-yellow",
		},
		size: {
			base: "text-[1rem]",
		},
	},
	defaultVariants: {
		size: "base",
		color: "yellow",
	},
})
