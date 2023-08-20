import React from "react"
import { Container, H1, Paragraph, Input, Button, Wrapper } from "../atoms"
import { IRegisterConfig } from "../../utils/interface"
import Icon from "@mdi/react"
import { mdiEyeOffOutline, mdiEyeOutline } from "@mdi/js"
import ApiResponse from "@/containers/ApiResponseContainer"

const RegisterArea = ({ config }: IRegisterConfig) => {
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
						value={config.name}
						onChange={(event: { target: { value: string } }) =>
							config.handleName(event.target.value.trim())
						}
					/>

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
						type={config.type}
						placeholder="Senha:"
						id="password"
						size="xl"
						value={config.password}
						onChange={(event: { target: { value: string } }) =>
							config.handlePassword(event.target.value.trim())
						}
					/>

					<button
						className={
							config.statusCode == 0
								? "absolute top-[11.8rem] left-[21rem] text-gray3 transform"
								: "absolute top-[10.5rem] left-[21rem] text-gray3 transform"
						}
						onClick={() => config.showPassword()}>
						<Icon
							path={config.eyesIcon ? mdiEyeOutline : mdiEyeOffOutline}
							size={1}
						/>
					</button>

					<ApiResponse config={config.apiResponse} />

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
