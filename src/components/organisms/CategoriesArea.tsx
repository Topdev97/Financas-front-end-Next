import { ICategoriesConfig } from "@/utils/interface"
import { Button, Container, Paragraph, Wrapper } from "../atoms"
import { AutoComplete } from "antd"
import { Dropdown } from "antd"
import Icon from "@mdi/react"
import { mdiPencilBoxOutline, mdiCloseCircle } from "@mdi/js"
import { Pagination } from "antd"
import React from "react"
import { useAsync, useCategory } from "@/hooks"

const CategoriesArea = ({ config }: ICategoriesConfig) => {
	const { content, totalPages, categoryName } = useCategory()
	const { apiResponse } = useAsync()

	return (
		<Container type="container">
			<Wrapper type="categoryFilter">
				<div className="flex space-x-4 relative">
					<AutoComplete
						value={config.selectedCategory}
						bordered={false}
						placeholder="Buscar por categoria"
						options={categoryName}
						onSelect={(data) => config.onSelect(data)}
						filterOption={(inputValue, option) =>
							option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
							-1
						}
						style={{
							width: 200,
							height: "2.5rem",
							borderRadius: "0.5rem",
							boxShadow: "0 0.3rem 0.62rem rgba(0,0,0,0.4)",
							outline: "1px solid #019267",
						}}
					/>
					<button
						className={
							config.selectedCategory
								? "block absolute top-2 left-36 text-medium_gray"
								: "hidden"
						}
						onClick={() => config.cleanFilter()}>
						<Icon path={mdiCloseCircle} size={1} />
					</button>
				</div>

				<Button
					size="md"
					color="green"
					onClick={() => config.handleCategoryCreation()}>
					Criar categoria
				</Button>
			</Wrapper>

			<Wrapper type="dataTable">
				<Wrapper type="headers">
					{config.headers.map((items, index) => (
						<Paragraph key={index} color="white">
							{items}
						</Paragraph>
					))}

					<Paragraph color="white">Ajustar</Paragraph>
				</Wrapper>

				{apiResponse.statusCode == 404 ? (
					<p className="text-center mt-44 text-medium_gray">
						{apiResponse.response}
					</p>
				) : (
					<div>
						{content.map((c, index) => (
							<Wrapper
								key={index}
								type="categoryContent"
								className={index % 2 == 0 ? "bg-white_one" : "bg-transparent"}>
								<Paragraph color="gray">{c.category}</Paragraph>

								<Paragraph color="gray">
									{c.destinedValue.toLocaleString("pt-BR", {
										style: "currency",
										currency: "BRL",
									})}
								</Paragraph>

								<Dropdown
									menu={{ items: config.menu(c.id) }}
									placement="bottom"
									arrow>
									<button>
										<Icon path={mdiPencilBoxOutline} size={1} />
									</button>
								</Dropdown>
							</Wrapper>
						))}
					</div>
				)}
			</Wrapper>

			<div className="float-right">
				<Pagination
					responsive
					current={config.page}
					disabled={content.length == 0}
					total={totalPages * config.itemsPerPage}
					showSizeChanger={totalPages >= 0 && false}
					showTotal={(total) => `Total ${total} items`}
					defaultCurrent={1}
					onChange={(page) => config.getCategoryByPage(page)}
				/>
			</div>
		</Container>
	)
}

export default CategoriesArea
