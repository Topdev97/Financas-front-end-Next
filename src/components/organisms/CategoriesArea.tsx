import { ICategoriesConfig } from "@/utils/interface"
import { Button, Container, Paragraph } from "../atoms"
import { AutoComplete } from "antd"
import { Dropdown } from "antd"
import Icon from "@mdi/react"
import { mdiPencilBoxOutline } from "@mdi/js"
import { Pagination } from "antd"
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
				<Button
					size="md"
					color="green"
					onClick={() => config.handleCategoryCreation()}>
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

				{config.content.map((c, index) => (
					<Container
						key={index}
						typecontainers="categoryContent"
						className={index % 2 == 0 ? "bg-white_one" : "bg-transparent"}>
						<Paragraph color="gray">{c.category}</Paragraph>

						<Paragraph color="gray">
							{c.destinedValue.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</Paragraph>

						<Dropdown menu={{ items: config.actions }} placement="bottom" arrow>
							<button>
								<Icon path={mdiPencilBoxOutline} size={1} />
							</button>
						</Dropdown>
					</Container>
				))}
			</Container>

			<div className="float-right">
				<Pagination
					responsive
					disabled={config.content.length == 0}
					total={config.content.length}
					showTotal={(total) => `Total ${total} items`}
					defaultPageSize={10}
					defaultCurrent={1}
					onChange={(page) => console.log(page)}
					onShowSizeChange={(current, size) => console.log(current, size)}
				/>
			</div>
		</div>
	)
}

export default CategoriesArea
