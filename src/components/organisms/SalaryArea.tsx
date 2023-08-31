import { ISettingsConfig } from "@/utils/interface"
import React from "react"
import { Button, Input, Paragraph } from "../atoms"
import { useRelease } from "@/hooks"

const SalaryArea = ({ config }: ISettingsConfig) => {
	const { salaryValue } = useRelease()
	return (
		<>
			<Paragraph size="lg" color="gray">
				Defina ou visualize o valor do seu salario:
			</Paragraph>

			{!config.activeEdit ? (
				<div className="flex space-x-5 mt-2 items-center">
					<div className="flex space-x-2">
						<Paragraph color="black">Valor:</Paragraph>

						<Paragraph color="black">
							{Number(salaryValue).toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</Paragraph>
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
						value={salaryValue}
						onChange={(event: { target: { value: string } }) =>
							config.handleSalary(event.target.value)
						}
					/>

					<Button
						size="base"
						disabled={!config.showSaveSalaryButton}
						className={
							config.showSaveSalaryButton ? "bg-light_green" : "bg-medium_gray"
						}
						onClick={() => config.saveSalary()}>
						Salvar
					</Button>

					<Button size="base" color="green" onClick={() => config.handleEdit()}>
						Voltar
					</Button>
				</div>
			)}
		</>
	)
}

export default SalaryArea
