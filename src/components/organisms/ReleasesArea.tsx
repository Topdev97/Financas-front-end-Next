import React from "react"
import { Container, Button, Paragraph, Wrapper } from "../atoms"
import { Tooltip, DatePicker, Pagination } from "antd"
import { IReleasesConfig } from "@/utils/interface"
import { mdiHelpBoxOutline, mdiUnfoldMoreHorizontal } from "@mdi/js"
import Icon from "@mdi/react"
import { useRelease } from "@/hooks"
import ReleaseTableContainer from "@/containers/ReleaseTableContainer"

const ReleasesArea = ({ config }: IReleasesConfig) => {
	const { currentDate, page, content, totalPages, salaryValue } = useRelease()

	return (
		<Container type="container">
			<div className="flex justify-between items-center w-full mb-5">
				<div className="flex space-x-4 items-end">
					<DatePicker
						className="inputs"
						format={"MM/YYYY"}
						onChange={config.selectCurrentDate}
						picker="month"
						placeholder={`Mês e ano selecionados: ${currentDate}`}
						style={{
							width: "16rem",
							height: "2.5rem",
							borderRadius: "0.5rem",
							boxShadow: "0 0.3rem 0.62rem rgba(0,0,0,0.4)",
							outline: "1px solid #019267",
						}}
					/>

					<Tooltip title={config.message} placement="right">
						<Icon
							path={mdiHelpBoxOutline}
							size={1}
							className="!text-medium_gray"
						/>
					</Tooltip>
				</div>

				<Button
					size="md"
					color="green"
					onClick={() => {
						config.openModal()
					}}>
					Criar lançamento
				</Button>
			</div>

			<Wrapper type="dataTable">
				<Wrapper type="headers" className="sm:hidden md:hidden">
					{config.headers.map((items, index) => (
						<Paragraph key={index} color="white">
							{items}
						</Paragraph>
					))}

					<Paragraph color="white">
						<Icon path={mdiUnfoldMoreHorizontal} size={1} />
					</Paragraph>
				</Wrapper>

				<ReleaseTableContainer />
			</Wrapper>

			<div className="flex flex-wrap justify-between pb-20">
				<div>
					<Paragraph color="gray">
						Salário:{" "}
						{Number(salaryValue).toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL",
						})}
					</Paragraph>

					<Paragraph color="gray">
						Total de gastos: {config.totalAmountAllocated()}
					</Paragraph>

					<Paragraph color="gray">
						Sobrando: {config.salaryMinusExpenses()}
					</Paragraph>
				</div>

				<div className="sm:mt-2">
					<Pagination
						responsive
						current={page}
						disabled={content.length == 0}
						total={totalPages * 10}
						showSizeChanger={totalPages >= 0 && false}
						showTotal={(total) => `Total ${total} items`}
						defaultCurrent={1}
						onChange={(page) => config.getReleaseByPage(page)}
					/>
				</div>
			</div>
		</Container>
	)
}

export default ReleasesArea
