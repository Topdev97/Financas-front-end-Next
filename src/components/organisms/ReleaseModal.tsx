import React from "react"
import { Button, Container, H1, Input, Wrapper } from "../atoms"
import ApiResponse from "@/containers/ApiResponseContainer"
import { useRelease, useCategory, useAsync } from "@/hooks"
import { AutoComplete, DatePicker } from "antd"
import { IReleaseConfig } from "@/utils/interface"
import Icon from "@mdi/react"
import { mdiCloseCircle } from "@mdi/js"
import { Actions } from "@/utils/enum"

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

					<div className="flex justify-between flex-wrap h-[10rem] mt-2 relative">
						<AutoComplete
							className={typeAction == Actions.CREATE ? "block" : "hidden"}
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

						<button
							className={
								config.formData.category != ""
									? "block absolute top-2 left-[17rem] text-medium_gray"
									: "hidden"
							}
							onClick={() => config.cleanFilter()}>
							<Icon path={mdiCloseCircle} size={1} />
						</button>

						<DatePicker
							format={"DD/MM/YYYY"}
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
							value={config.formData.name}
							typeinput="input"
							size="md"
							placeholder="Lançamento:"
							onChange={(event: { target: { value: string } }) =>
								config.handleFieldChange("name", event.target.value)
							}
						/>

						<Input
							value={config.formData.value == 0 ? "" : config.formData.value}
							typeinput="input"
							size="sm"
							placeholder="Valor:"
							type="number"
							onChange={(event: { target: { value: string } }) =>
								config.handleFieldChange("value", Number(event.target.value))
							}
						/>

						<Input
							value={config.formData.locale}
							typeinput="input"
							size="md"
							placeholder="Localização:"
							onChange={(event: { target: { value: string } }) =>
								config.handleFieldChange("locale", event.target.value)
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
