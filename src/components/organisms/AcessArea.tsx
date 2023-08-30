"use client"

import { Container, H1, Paragraph, Input, Button, Wrapper } from "../atoms"
import React from "react"
import Icon from "@mdi/react"
import {
	mdiAccountOutline,
	mdiLockOutline,
	mdiEyeOffOutline,
	mdiEyeOutline,
} from "@mdi/js"
import { ILoginConfig } from "../../utils/interface"
import ApiResponse from "@/containers/ApiResponseContainer"
import { useAsync, useValidation } from "@/hooks"

const AcessArea = ({ config }: ILoginConfig) => {
	const { apiResponse } = useAsync()
	const { handleFieldChange } = useValidation()

	return (
		<Container type="login">
			<Wrapper type="userInput">
				<div className="text-center">
					<H1 className="!text-dark_green"> Entrar </H1>

					<Paragraph className="!text-medium_gray">
						Após o login você terá acesso as funcionalidades
					</Paragraph>
				</div>

				<Wrapper type="input">
					<Input
						typeinput="loginInput"
						type="email"
						size="xl"
						value={config.formData.email}
						onChange={(event: { target: { value: string } }) => {
							handleFieldChange("email", event.target.value, config.setFormData)
						}}
					/>

					<Icon
						path={mdiAccountOutline}
						size={1}
						className="absolute top-[3.2rem] left-[1rem] text-gray3 transform"
					/>

					<Input
						typeinput="loginInput"
						type={config.type}
						id="pass"
						size="xl"
						value={config.formData.password}
						onChange={(event: { target: { value: string } }) => {
							handleFieldChange(
								"password",
								event.target.value,
								config.setFormData,
							)
						}}
					/>

					<Icon
						path={mdiLockOutline}
						size={1}
						className="absolute top-[9.2rem] left-[1rem] text-gray3 transform"
					/>

					<button
						className="absolute top-[9.2rem] left-[21rem] text-gray3 transform"
						onClick={() => config.showPassword()}>
						<Icon
							path={config.eyesIcon ? mdiEyeOutline : mdiEyeOffOutline}
							size={1}
						/>
					</button>

					<div className="absolute top-[12.5rem]">
						<ApiResponse config={apiResponse} />
					</div>

					<Button
						size="xl"
						disabled={!config.showButton}
						className={config.showButton ? "bg-light_green" : "bg-medium_gray"}
						onClick={() =>
							config.login({
								email: config.formData.email.trim(),
								password: config.formData.password.trim(),
							})
						}>
						Entrar
					</Button>
				</Wrapper>

				<div className="flex flex-col -mt-8">
					<button
						className="font-bold text-light_green"
						onClick={() => config.openRegisterArea()}>
						Criar conta gratis
					</button>

					<button
						className="font-bold text-medium_gray"
						onClick={() => config.openRedefinePasswordArea()}>
						Esqueceu a senha ?
					</button>
				</div>
			</Wrapper>
		</Container>
	)
}

export default AcessArea
