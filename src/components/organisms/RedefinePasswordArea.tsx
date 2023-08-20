import React from "react"
import { Button, Container, H1, Input, Paragraph, Wrapper } from "../atoms"
import { IRedefinePasswordConfig } from "@/utils/interface"
import ApiResponse from "@/containers/ApiResponseContainer"

const RedefinePassword = ({ config }: IRedefinePasswordConfig) => {
	return (
		<Container type="login">
			<Wrapper type="userInput">
				<div className="text-center">
					<H1 className="!text-dark_green"> Nova senha </H1>

					<Paragraph className="!text-medium_gray">
						Preencha os campos e redefina sua senha
					</Paragraph>
				</div>

				<Wrapper type="input">
					<Input
						typeinput="input"
						type="email"
						placeholder="Email:"
						size="xl"
						value={config.email}
						onChange={(event: { target: { value: string } }) =>
							config.handleEmail(event.target.value.trim())
						}
					/>

					<Input
						typeinput="input"
						type="text"
						placeholder="Senha:"
						size="xl"
						value={config.password1}
						onChange={(event: { target: { value: string } }) =>
							config.handlePassword1(event.target.value.trim())
						}
					/>

					<Input
						typeinput="input"
						type="text"
						placeholder="Senha:"
						size="xl"
						value={config.password2}
						onChange={(event: { target: { value: string } }) =>
							config.handlePassword2(event.target.value.trim())
						}
					/>

					<ApiResponse config={config.apiResponse} />

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
