import React from "react"
import { Button, Container, H1, Input, Wrapper } from "../atoms"
import ApiResponse from "@/containers/ApiResponseContainer"
import { useRelease, useCategory, useAsync } from "@/hooks"
import { AutoComplete, DatePicker } from "antd"
import { IReleaseConfig } from "@/utils/interface"
import dayjs from "dayjs"

const CreateOrUpdateReleaseModal = ({ config }: IReleaseConfig) => {
	const { typeAction } = useRelease()
	const { categoryName } = useCategory()
	const { apiResponse } = useAsync()

	return (
		<Container type="backgroundModal">
			<Wrapper type="modal">
				<Wrapper type="actionsModal">
					<H1 color="dark_gray" size="md">
						{typeAction} categoria
					</H1>

					<div className="flex justify-between flex-wrap h-[7rem] mt-2">
						<AutoComplete
							value={config.formData.category}
							bordered={false}
							placeholder="Buscar por categoria"
							options={categoryName}
							onSelect={(data) => config.onSelect(data)}
							filterOption={(inputValue, option) =>
								option!.value
									.toUpperCase()
									.indexOf(inputValue.toUpperCase()) !== -1
							}
							style={{
								width: 300,
								height: "2.5rem",
								fontWeight: "bold",
								borderRadius: "0.5rem",
								boxShadow: "0 0.3rem 0.62rem rgba(0,0,0,0.4)",
							}}
						/>

						<DatePicker
							format={"DD/MM/YYYY"}
							value={
								config.formData.date == "" ? null : dayjs(config.formData.date)
							}
							placeholder="Selecione uma data"
							onChange={config.onChange}
							style={{
								width: "18rem",
								height: "2.5rem",
								fontWeight: "bold",
								borderRadius: "0.5rem",
								boxShadow: "0 0.3rem 0.62rem rgba(0,0,0,0.4)",
							}}
						/>

						<Input
							typeinput="input"
							size="md"
							placeholder="Lançamento:"
							value={config.formData.name}
							onChange={(event: { target: { value: string } }) =>
								config.handleFieldChange("name", event.target.value)
							}
						/>

						<Input
							typeinput="input"
							size="sm"
							placeholder="Valor:"
							type="number"
							value={config.formData.value == 0 ? "" : config.formData.value}
							onChange={(event: { target: { value: string } }) =>
								config.handleFieldChange("value", Number(event.target.value))
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
								onClick={() => config.closeCreateReleaseModal()}>
								Fechar
							</Button>

							<Button
								color="green"
								size="lg"
								disabled={!config.showButton}
								onClick={() => config.createOrUpdateRelease(typeAction)}
								className={
									config.showButton ? "bg-light_green" : "bg-medium_gray"
								}>
								Criar
							</Button>
						</div>
					</div>
				</Wrapper>
			</Wrapper>
		</Container>
	)
}

export default CreateOrUpdateReleaseModal
