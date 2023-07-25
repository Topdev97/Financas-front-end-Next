import React from "react"
import { Container, Button, H1, Paragraph } from "../atoms"
import ApiResponse from "@/containers/ApiResponseContainer"
import { useCategory } from "@/hooks"

const DeleteModal = ({ type }: any) => {
	const { apiResponse, setShowDeleteModal } = useCategory()

	return (
		<Container typecontainers="backgroundContainer">
			<Container typecontainers="modalContainer">
				<Container
					typecontainers="actionsModalContainer"
					className="text-center">
					<H1 size="base" color="dark_gray">
						Deletar {type}
					</H1>
					<Paragraph color="gray">Deseja mesmo deletar?</Paragraph>

					<div className="mt-7">
						<ApiResponse config={apiResponse} />

						<div className="flex space-x-4 items-center justify-center mt-3">
							<Button
								borderColor="gray"
								size="lg"
								className="!text-dark_gray"
								onClick={() => setShowDeleteModal(false)}>
								Cancelar
							</Button>

							<Button color="green" size="lg">
								Deletar
							</Button>
						</div>
					</div>
				</Container>
			</Container>
		</Container>
	)
}

export default DeleteModal
