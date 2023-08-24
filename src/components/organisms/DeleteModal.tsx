import React from "react"
import { Container, Button, H1, Paragraph, Wrapper } from "../atoms"
import ApiResponse from "@/containers/ApiResponseContainer"
import { useAsync } from "@/hooks"
import { IDeleteCategoryConfig } from "@/utils/interface"

const DeleteModal = ({ config }: IDeleteCategoryConfig) => {
	const { apiResponse } = useAsync()

	return (
		<Container type="backgroundModal">
			<Wrapper type="modal">
				<Wrapper type="actionsModal" className="text-center">
					<H1 size="base" color="dark_gray">
						Deletar {config?.type}
					</H1>
					<Paragraph color="gray">Deseja mesmo deletar?</Paragraph>

					<div className="mt-7 flex flex-col items-center">
						<ApiResponse config={apiResponse} />

						<div className="flex space-x-4 items-center justify-center mt-3">
							<Button
								borderColor="gray"
								size="lg"
								className="!text-dark_gray"
								onClick={() => config.closeDeleteModal()}>
								Cancelar
							</Button>

							<Button
								color="green"
								size="lg"
								onClick={() => config.handleDelete()}
								disabled={!config.showButton}
								className={
									config.showButton ? "bg-light_green" : "bg-medium_gray"
								}>
								Deletar
							</Button>
						</div>
					</div>
				</Wrapper>
			</Wrapper>
		</Container>
	)
}

export default DeleteModal
