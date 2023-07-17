import { w, W } from "windstitch"

export const Button = w.button(
	`
	shadow-[0_0.3rem_0.62rem_rgba(0,0,0,0.4)]
    rounded-md 
    flex 
    justify-center
    items-center 
    font-[700]
	text-white
`,
	{
		variants: {
			color: {
				green: `bg-dark_green`,
			},
			size: {
				xs: "px-1.5 py-0.5 rounded text-xs",
				sm: "h-[1.5rem] w-[5rem]",
				base: "h-[2rem] w-[5rem]",
				md: "px-4 py-3 rounded-md text-lg",
				lg: "!h-[2.5rem] w-[5rem]",
				xl: "text-xl w-[24rem]",
			},
		},
		defaultVariants: {
			size: "base",
		},
	},
)

export type ButtonProps = W.Infer<typeof Button>
