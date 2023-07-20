import React from "react"
import { Container, H1, Input, Button } from "../atoms"
import { ICreateCategoryConfig } from "@/utils/interface"

const CreateCategoryModal = ({ config }: ICreateCategoryConfig) => {
	return (
		<Container typecontainers="backgroundContainer">
			<Container typecontainers="modalContainer">
				<Container typecontainers="actionsModalContainer">
					<H1 color="dark_gray" size="md">
						{config.typeAction} categoria
					</H1>

					<div className="flex space-x-4 mt-2">
						<Input
							typeinput="input"
							size="sm"
							placeholder="Nome:"
							onChange={(event: { target: { value: string } }) =>
								config.handleCategory(event.target.value)
							}
						/>

						<Input
							typeinput="input"
							size="sm"
							placeholder="Valor:"
							type="number"
							onChange={(event: { target: { value: string } }) =>
								config.handleDestinedValue(Number(event.target.value))
							}
						/>
					</div>

					<div className="flex space-x-4 mt-10 justify-end">
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
							className={
								config.showButton ? "bg-light_green" : "bg-medium_gray"
							}>
							Criar
						</Button>
					</div>
				</Container>
			</Container>
		</Container>
	)
}

export default CreateCategoryModal
