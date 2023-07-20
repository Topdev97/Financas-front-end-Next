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
				transparent: "",
			},
			borderColor: {
				gray: "border-dark_gray border-2",
				transparent: "",
			},
			size: {
				xs: "px-1.5 py-0.5 rounded text-xs",
				sm: "h-[1.5rem] w-[5rem]",
				base: "h-[2rem] w-[5rem]",
				md: "h-[2.5rem] w-[10rem]",
				lg: "h-[2.5rem] w-[5rem]",
				xl: "w-[24rem] h-[3.75rem]",
			},
		},
		defaultVariants: {
			size: "base",
			color: "transparent",
			borderColor: "transparent",
		},
	},
)

export type ButtonProps = W.Infer<typeof Button>
