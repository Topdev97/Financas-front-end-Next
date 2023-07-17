import React from "react"
import { Button, Container, H1, Input, Paragraph } from "../atoms"

const RedefinePassword = () => {
	return (
		<Container typecontainers="loginContainer">
			<Container typecontainers="userInputContainer">
				<div className="text-center">
					<H1 className="!text-dark_green"> Nova senha </H1>

					<Paragraph className="!text-medium_gray">
						Preencha os campos e redefina sua senha
					</Paragraph>
				</div>

				<Container typecontainers="inputContainer">
					<Input
						typeinput="input"
						type="email"
						placeholder="Email:"
						size="xl"
					/>

					<Input typeinput="input" type="text" placeholder="Senha:" size="xl" />

					<Input typeinput="input" type="text" placeholder="Senha:" size="xl" />
					{/* 
					{config.statusCode > 0 && (
						<p
							className={
								config.statusCode == 201 ? "text-green-400" : "text-red"
							}>
							{config.apiResponse}
						</p>
					)} */}

					<Button
						color="gray"
						size="xl"
						// onClick={() => config.createUsers()}
						// disabled={!config.showButton}
						// className={config.showButton ? "bg-light_green" : "bg-medium_gray"}
					>
						Cadastrar
					</Button>
				</Container>

				<div className="-mt-8">
					<button
						className="font-bold text-light_green"
						// onClick={() => config.closeRegisterArea()}
					>
						Voltar
					</button>
				</div>
			</Container>
		</Container>
	)
}

export default RedefinePassword
