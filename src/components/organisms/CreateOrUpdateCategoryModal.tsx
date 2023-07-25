import React from "react"
import { Container, H1, Input, Button } from "../atoms"
import { ICreateCategoryConfig } from "@/utils/interface"
import ApiResponse from "../../containers/ApiResponseContainer"
import { useCategory } from "@/hooks"

const CreateCategoryModal = ({ config }: ICreateCategoryConfig) => {
	const { typeAction, category, destinedValue, apiResponse } = useCategory()

	return (
		<Container typecontainers="backgroundContainer">
			<Container typecontainers="modalContainer">
				<Container typecontainers="actionsModalContainer">
					<H1 color="dark_gray" size="md">
						{typeAction} categoria
					</H1>

					<div className="flex space-x-4 mt-2">
						<Input
							typeinput="input"
							size="sm"
							placeholder="Nome:"
							value={category}
							onChange={(event: { target: { value: string } }) =>
								config.handleCategory(event.target.value)
							}
						/>

						<Input
							typeinput="input"
							size="sm"
							placeholder="Valor:"
							type="number"
							value={destinedValue == 0 ? "" : destinedValue}
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
								Criar
							</Button>
						</div>
					</div>
				</Container>
			</Container>
		</Container>
	)
}

export default CreateCategoryModal
