import React from "react"
import { Container, H1, Paragraph, Input, Button } from "../../atoms"
import useAuth from "../../../hooks/useAuth"
import { IRegister } from "../../../utils/interface"
import Icon from "@mdi/react"
import { mdiEyeOffOutline, mdiEyeOutline } from "@mdi/js"

const RegisterArea = (config: IRegister) => {
	const { closeRegisterArea } = useAuth()

	return (
		<Container typeContainers="loginContainer">
			<Container typeContainers="userInputContainer">
				<div className="text-center">
					<H1 className="!text-dark_green"> Cadastre-se </H1>

					<Paragraph className="!text-medium_gray">
						Preencha os campos e crie sua conta
					</Paragraph>
				</div>

				<Container typeContainers="inputContainer">
					<Input
						typeInput="input"
						type="text"
						placeholder="Nome:"
						size="xl"
						value={config.name}
						onChange={(event: { target: { value: string } }) =>
							config.handleName(event.target.value)
						}
					/>

					<Input
						typeInput="input"
						type="email"
						placeholder="Email:"
						value={config.email}
						size="xl"
						onChange={(event: { target: { value: string } }) =>
							config.handleEmail(event.target.value)
						}
					/>

					<Input
						typeInput="input"
						type={config.type}
						placeholder="Senha:"
						id="password"
						size="xl"
						onChange={(event: { target: { value: string } }) =>
							config.handlePassword(event.target.value)
						}
					/>

					<button
						className="absolute top-[11.8rem] left-[21rem] text-gray3 transform"
						onClick={() => config.showPassword()}>
						<Icon
							path={config.eyesIcon ? mdiEyeOutline : mdiEyeOffOutline}
							size={1}
						/>
					</button>

					{config.statusCode > 0 && (
						<p
							className={
								config.statusCode == 201 ? "text-green-400" : "text-red"
							}>
							{config.apiResponse}
						</p>
					)}

					<Button
						color="gray"
						size="xl"
						onClick={() => config.createUsers()}
						disabled={!config.showButton}
						className={config.showButton ? "bg-light_green" : "bg-medium_gray"}>
						Cadastrar
					</Button>
				</Container>

				<div className="-mt-8">
					<button
						className="font-bold text-light_green"
						onClick={() => closeRegisterArea()}>
						Voltar
					</button>
				</div>
			</Container>
		</Container>
	)
}

export default RegisterArea
