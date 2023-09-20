import React from "react"
import { Button, Container, H1, Input, Paragraph, Wrapper } from "../atoms"
import { IRedefinePasswordConfig } from "@/utils/interface"
import ApiResponse from "@/containers/ApiResponseContainer"
import { useAsync, useValidation } from "@/hooks"

const RedefinePassword = ({ config }: IRedefinePasswordConfig) => {
	const { apiResponse } = useAsync()
	const { handleFieldChange } = useValidation()

	return (
		<Container type="login">
			<Wrapper type="userInput" className="!h-[28rem]">
				<div className="text-center">
					<H1 className="!text-dark_green"> Nova senha </H1>

					<Paragraph className="!text-medium_gray">
						Preencha os campos e redefina sua senha
					</Paragraph>
				</div>

				<Wrapper type="input" className="!h-[18rem]">
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

					<ApiResponse config={apiResponse} />

					<Button
						size="xl"
						disabled={!config.showButton}
						className={config.showButton ? "bg-light_green" : "bg-medium_gray"}
						onClick={() => config.redefinePassword()}>
						Redefinir
					</Button>
				</Wrapper>

				<div className="-mt-8">
					<button
						className="font-bold text-light_green"
						onClick={() => config.closeRedefinePasswordArea()}>
						Voltar
					</button>
				</div>
			</Wrapper>
		</Container>
	)
}

export default RedefinePassword
