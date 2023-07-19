import { ICategoriesConfig } from "@/utils/interface"
import { Button, Container, Paragraph } from "../atoms"
import { AutoComplete } from "antd"
import React from "react"

const CategoriesArea = ({ config }: ICategoriesConfig) => {
	return (
		<div className="h-screen px-8 py-6 w-full">
			<div className="flex justify-between items-center w-full mb-5">
				<AutoComplete
					bordered={false}
					style={{
						width: 200,
						height: "2.5rem",
						borderRadius: "0.5rem",
						boxShadow: "0 0.3rem 0.62rem rgba(0,0,0,0.4)",
						outline: "1px solid #019267",
					}}
					placeholder="Buscar por categoria"
				/>
				<Button size="md" color="green">
					Criar categoria
				</Button>
			</div>

			<Container typecontainers="dataTableContainer">
				<Container typecontainers="headersContainer">
					{config.headers.map((items, index) => (
						<Paragraph key={index} color="white">
							{items}
						</Paragraph>
					))}

					<Paragraph color="white">Ajustar</Paragraph>
				</Container>
			</Container>
		</div>
	)
}

export default CategoriesArea
