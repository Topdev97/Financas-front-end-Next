import { w } from "windstitch"

export const Input = w.input(
	`text-[1rem]
     font-[700]
     rounded-md
     shadow-[0_0.3rem_0.62rem_rgba(0,0,0,0.4)]
     outline-[#e1e4ed]
     bg-gray-100
     input`,
	{
		variants: {
			typeinput: {
				loginInput: `px-14 login`,
				input: ` px-4 login`,
			},
			size: {
				xs: "w-[8rem] h-[2rem]",
				sm: `w-[18rem] h-[2.5rem]`,
				md: "w-[19rem] h-[2.5rem]",
				xl: `w-[24rem] h-[3.75rem]`,
			},
		},
	},
)
