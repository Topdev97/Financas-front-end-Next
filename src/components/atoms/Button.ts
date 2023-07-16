import { w, W } from "windstitch"

export const Button = w.button(
	`
	shadow-[0_0.3rem_0.62rem_rgba(0,0,0,0.4)]
    rounded-md 
    h-[3.75rem]
    flex 
    justify-center
    items-center 
    font-[700]
	text-white
`,
	{
		variants: {
			size: {
				xs: "px-1.5 py-0.5 rounded text-xs",
				sm: "px-2 py-1 rounded-md text-sm",
				base: "px-3 py-2 rounded-md text-base",
				md: "px-4 py-3 rounded-md text-lg",
				lg: "px-5 py-4 rounded-lg text-lg",
				xl: "rounded-lg text-xl w-[24rem]",
			},
		},
		defaultVariants: {
			size: "base",
		},
	},
)

export type ButtonProps = W.Infer<typeof Button>
