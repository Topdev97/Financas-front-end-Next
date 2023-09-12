import React from "react"
import { Container, H1, Paragraph, Input, Button, Wrapper } from "../atoms"
import { IRegisterConfig } from "../../utils/interface"
import Icon from "@mdi/react"
import { mdiEyeOffOutline, mdiEyeOutline } from "@mdi/js"
import ApiResponse from "@/containers/ApiResponseContainer"
import { useAsync, useValidation } from "@/hooks"

const RegisterArea = ({ config }: IRegisterConfig) => {
	const { apiResponse } = useAsync()
	const { handleFieldChange } = useValidation()

	return (
		<Container type="login">
			<Wrapper type="userInput">
				<div className="text-center">
					<H1 className="!text-dark_green"> Cadastre-se </H1>

					<Paragraph className="!text-medium_gray">
						Preencha os campos e crie sua conta
					</Paragraph>
				</div>

				<Wrapper type="input">
					<Input
						typeinput="input"
						type="text"
						placeholder="Nome:"
						size="xl"
						value={config.formData.name}
						onChange={(event: { target: { value: string } }) =>
							handleFieldChange(
								"name",
								event.target.value.trim(),
								config.setFormData,
							)
						}
					/>

					<Input
						typeinput="input"
						type="email"
						placeholder="Email:"
						size="xl"
						value={config.formData.email}
						onChange={(event: { target: { value: string } }) =>
							handleFieldChange(
								"email",
								event.target.value.trim(),
								config.setFormData,
							)
						}
					/>

					<div className="w-full relative ml-2">
						{" "}
						<Input
							typeinput="input"
							type={config.type}
							placeholder="Senha:"
							id="password"
							size="xl"
							value={config.formData.password}
							onChange={(event: { target: { value: string } }) =>
								handleFieldChange(
									"password",
									event.target.value.trim(),
									config.setFormData,
								)
							}
						/>
						<button
							className={
								apiResponse.statusCode == 0
									? "absolute top-0 right-0 w-[12%] h-full  text-gray3 transform"
									: "absolute top-[10.5rem] xl:left-[25rem] left-[17rem] text-gray3 transform"
							}
							onClick={() => config.showPassword()}>
							<Icon
								path={config.eyesIcon ? mdiEyeOutline : mdiEyeOffOutline}
								size={1}
							/>
						</button>
					</div>

					<ApiResponse config={apiResponse} />

					<Button
						size="xl"
						onClick={() => config.createUsers()}
						disabled={!config.showButton}
						className={config.showButton ? "bg-light_green" : "bg-medium_gray"}>
						Cadastrar
					</Button>
				</Wrapper>

				<div className="-mt-8">
					<button
						className="font-bold text-light_green"
						onClick={() => config.closeRegisterArea()}>
						Voltar
					</button>
				</div>
			</Wrapper>
		</Container>
	)
}

export default RegisterArea
