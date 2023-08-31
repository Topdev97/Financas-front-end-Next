import React from "react"
import { Button, Input, Paragraph } from "../atoms"
import { ISettingsConfig } from "@/utils/interface"
import { useValidation } from "@/hooks"

const ChangePasswordArea = ({ config }: ISettingsConfig) => {
	const { handleFieldChange } = useValidation()

	return (
		<div className="mt-10">
			<Paragraph size="lg" color="gray">
				Troque a sua senha:
			</Paragraph>

			<div className="flex space-x-5 mt-2 items-center">
				<Input
					typeinput="input"
					size="sm"
					type="text"
					value={config.formData.password1}
					placeholder="Nova senha:"
					onChange={(event: { target: { value: string } }) =>
						handleFieldChange(
							"password1",
							event.target.value.trim(),
							config.setFormData,
						)
					}
				/>

				<Input
					typeinput="input"
					size="sm"
					type="text"
					value={config.formData.password2}
					placeholder="Repetir nova senha:"
					onChange={(event: { target: { value: string } }) =>
						handleFieldChange(
							"password2",
							event.target.value.trim(),
							config.setFormData,
						)
					}
				/>

				<Button
					size="lg"
					color="green"
					onClick={() => config.redefinePassword()}
					disabled={!config.showButton}
					className={config.showButton ? "bg-light_green" : "bg-medium_gray"}>
					Salvar
				</Button>
			</div>
		</div>
	)
}

export default ChangePasswordArea
