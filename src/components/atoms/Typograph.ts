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
			gray: "text-medium_gray",
			yellow: "text-yellow",
			black: "text-black",
			white: "text-white",
		},
		size: {
			base: "text-[1rem]",
			lg: "text-[1.2rem]",
		},
	},
	defaultVariants: {
		size: "base",
		color: "yellow",
	},
})
