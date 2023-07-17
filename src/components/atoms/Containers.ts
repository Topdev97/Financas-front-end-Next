import { w, W } from "windstitch"

export const Container = w.div(``, {
	variants: {
		typecontainers: {
			Container: `
					h-screen
					flex
					flex-row
					justify-between
					items-center
            `,
			logoContainer: `
					bg-gradient-to-r
					from-dark_green
					to-light_green
					flex flex-col
					justify-center
					items-center
					w-[65%]
					h-full
					rounded-bl-[50rem]
					pl-32
					text-white
            `,
			loginContainer: `
					bg-white_two
					flex 
					flex-col
					justify-center
					items-center
					rounded-br-[10rem]
            `,
			userInputContainer: `
					w-[35%]
					h-[35rem]
					left-24
					absolute
					rounded-lg
					ml-10 flex
					flex-col
					justify-evenly
					items-center
					glass-effect
					sm:z-10
					userInput`,

			inputContainer: `
					flex
					flex-col
					justify-evenly
					items-center
					h-[20rem]
					mt-[-2rem] 
					relative`,

			loadingContainer: `	
					w-full
					h-full 
					flex
					justify-center
					items-center 
					z-30
					fixed 
					top-0 
					left-0`,

			modalContainer: `
					w-full
					h-full
					absolute
					top-[50%]
					left-[50%]
					flex 
					flex-col
					items-center 
					justify-center
					modalContainer
			`,
			menuContainer: `
					bg-gradient-to-t 
					from-dark_green 
					to-light_green 
					text-white 
					flex 
					flex-col 
					justify-between 
					w-16
					shadow-[0_0.3rem_0.62rem_rgba(0,0,0,0.4)]
			`,
			menuIconContainer: `
					flex 
					flex-col 
					space-y-5 
					items-center 
					h-[8rem] 
					mt-5
			`,
			logoutContainer: `
					h-28 
					flex 
					justify-center 
					items-center
			`,
		},
	},
})

export type ContainerProps = W.Infer<typeof Container>
