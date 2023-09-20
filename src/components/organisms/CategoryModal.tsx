import React from "react"
import { Container, H1, Input, Button, Wrapper } from "../atoms"
import { ICreateCategoryConfig } from "@/utils/interface"
import ApiResponse from "../../containers/ApiResponseContainer"
import { useAsync, useCategory } from "@/hooks"

const CreateCategoryModal = ({ config }: ICreateCategoryConfig) => {
	const { typeAction } = useCategory()
	const { apiResponse } = useAsync()

	return (
		<Container type="backgroundModal">
			<Wrapper type="modal">
				<Wrapper type="actionsModal">
					<H1 color="dark_gray" size="md">
						{typeAction} categoria
					</H1>

					<div className="flex space-x-4 mt-2">
						<Input
							typeinput="input"
							size="sm"
							placeholder="Nome:"
							value={config.category}
							onChange={(event: { target: { value: string } }) =>
								config.handleCategory(event.target.value)
							}
						/>

						<Input
							typeinput="input"
							size="sm"
							placeholder="Valor:"
							type="number"
							value={config.destinedValue == 0 ? "" : config.destinedValue}
							onChange={(event: { target: { value: string } }) =>
								config.handleDestinedValue(Number(event.target.value))
							}
						/>
					</div>

					<div className="mt-10">
						<ApiResponse config={apiResponse} />

						<div className="flex space-x-4 float-right">
							<Button
								borderColor="gray"
								size="lg"
								className="!text-dark_gray"
								onClick={() => config.closeCreateCategoryModal()}>
								Cancelar
							</Button>

							<Button
								color="green"
								size="lg"
								disabled={!config.showButton}
								onClick={() => config.createOrUpdateCategory(typeAction)}
								className={
									config.showButton ? "bg-light_green" : "bg-medium_gray"
								}>
								{typeAction}
							</Button>
						</div>
					</div>
				</Wrapper>
			</Wrapper>
		</Container>
	)
}

export default CreateCategoryModal
