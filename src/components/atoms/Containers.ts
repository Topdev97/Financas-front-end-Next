import { w, W } from "windstitch"

export const Container = w.div(``, {
	variants: {
		type: {
			auth: `
				h-screen
				flex
				flex-row
				justify-between
				items-center
				w-screen
            `,
			logo: `
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
				md:pl-10
				
            `,
			logoMobile: `
				bg-gradient-to-r
				from-dark_green
				to-light_green
				flex flex-col
				justify-center
				items-center
				w-screen
				h-screen
				md:hidden
				lg:hidden
				xl:hidden
				px-20
			`,
			login: `
				bg-white_two
				flex 
				flex-col
				justify-center
				items-center
				rounded-br-[10rem]
				
            `,
			loading: `	
				w-full
				h-full 
				flex
				justify-center
				items-center 
				z-30
				fixed 
				top-0 
				left-0`,
			menu: `
				bg-gradient-to-t 
				from-dark_green 
				to-light_green 
				text-white 
				flex 
				flex-col 
				justify-between 
				w-16
				h-screen
				fixed
				z-10
				shadow-[0_0.3rem_0.62rem_rgba(0,0,0,0.4)]
			`,
			bottomMenu: `
				bg-gradient-to-t 
                from-dark_green 
                to-light_green  
				fixed
				bottom-0 
				w-screen 
				z-10 
				h-10 
				py-2"
			`,
			container: `
				h-screen 
				py-6
				px-8
				w-screen	
			`,
			backgroundModal: `
				w-full
				h-full 
				flex
				justify-center
				items-center 
				z-10
				fixed 
				top-0 
				left-0`,
		},
	},
})

export type ContainerProps = W.Infer<typeof Container>
