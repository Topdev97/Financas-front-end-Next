import { w, W } from "windstitch"

export const Wrapper = w.div("", {
	variants: {
		type: {
			modal: `
                sm:px-5
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
			menuIcon: `
				flex 
				flex-col 
				space-y-5 
				items-center 
				h-[8rem] 
				mt-5
                sm:flex-row
                sm:justify-evenly
                sm:mt-0
                sm:h-10
                sm:space-y-0
                md:mt-0
                md:h-10
                md:space-y-0
                md:flex-row
                md:justify-evenly
			`,
			logout: `
                h-28 
                flex 
                justify-center 
                items-center
            `,
			userInput: `
                w-[35%]
                h-[35rem]
                left-24
                absolute
                rounded-lg
                ml-10 
                flex
                flex-col
                justify-evenly
                items-center
                glass-effect
                userInput
                z-10
                sm:w-[80%]
                sm:left-0
                sm:ml-12
                md:w-[45%]
                md:-ml-8
                px-5
            `,
			input: `
                flex
                flex-col
                justify-evenly
                items-center
                h-[20rem]
                mt-[-2rem] 
                relative
                sm:w-full
                md:w-full
                lg:w-full
            `,
			categoryFilter: `
                flex 
                justify-between 
                items-center 
                w-full 
                mb-5
            `,
			dataTable: `
                w-[100%]
                min-h-[35rem]
                pt-12
                sm:pt-0
                md:pt-0
                mb-8
                medium_gray
                glass-effect
                rounded-lg
                pb-2
            `,
			categoryContent: `
                grid
                grid-cols-[48%_49%_5%]
                sm:grid-cols-[38%_49%_5%]
                h-12
                px-9
                w-full
                items-center
                font-[700]
                text-black
            `,
			headers: `
                flex
                bg-light_green
                h-12
                px-8
                w-full
                items-center
                justify-between
                rounded-tl-lg
                rounded-tr-lg
                fixed
                z-10
                top-0
            `,
			actionsModal: `
                modal
                bg-white 
                flex 
                flex-col 
                py-5
                px-5
                min-h-[15rem] 
                sm:mx-5
                w-[40rem] 
                text-black 
                rounded-md
               
            `,
			releaseContent: `
                grid
                xl:grid-cols-[24%_26%_26%_22.5%_5%]
                lg:grid-cols-[24%_26%_26%_22.5%_5%]
                grid-cols-[1fr_5%]
                h-12
                px-9
                w-full
                items-center
                font-[700]
                text-black
            `,

			headersReleasesTable: `
                grid 
                grid-cols-[23%_26.2%_26%_22%_12%] 
                py-3 
                px-8
                lg:pr-10
                relative
            `,

			contentReleaseTable: `
                grid 
                grid-cols-[24%_26%_26%_23%_8%] 
                sm:flex
                sm:flex-col
                sm:mb-5
                md:flex
                md:flex-col
                md:mb-5
                px-10 
                space-y-2
            `,
		},
	},
})

export type WrapperProps = W.Infer<typeof Wrapper>
