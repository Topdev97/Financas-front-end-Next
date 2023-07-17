import React from "react"
import { Paragraph, Button, Input } from "@/components/atoms"
import { ISettings } from "@/utils/interface"

const Settings = (config: ISettings) => {
	return (
		<div className="h-screen px-8 py-6">
			<div>
				<Paragraph size="lg" color="gray">
					Defina ou visualize o valor do seu salario:
				</Paragraph>

				{!config.activeEdit ? (
					<div className="flex space-x-5 mt-2 items-center">
						<div className="flex space-x-2">
							<Paragraph color="black">Valor:</Paragraph>
							<Paragraph color="black">R$0.00</Paragraph>
						</div>
						<Button size="sm" color="green" onClick={() => config.handleEdit()}>
							Editar
						</Button>
					</div>
				) : (
					<div className="flex space-x-5 mt-2 items-center">
						<Input
							typeinput="input"
							size="xs"
							type="number"
							placeholder="Valor:"
						/>

						<Button
							size="base"
							color="green"
							onClick={() => config.editSalary()}>
							Salvar
						</Button>
					</div>
				)}
			</div>

			<div className="mt-10">
				<Paragraph size="lg" color="gray">
					Troque a sua senha:
				</Paragraph>

				<div className="flex space-x-5 mt-2 items-center">
					<Input
						typeinput="input"
						size="sm"
						type="text"
						placeholder="Nova senha:"
					/>
					<Input
						typeinput="input"
						size="sm"
						type="text"
						placeholder="Repetir nova senha:"
					/>
					<Button size="lg" color="green" onClick={() => config.editSalary()}>
						Salvar
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Settings
