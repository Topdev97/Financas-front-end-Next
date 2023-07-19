import React from "react"
import { Button, Input, Paragraph } from "../atoms"
import { ISettingsConfig } from "@/utils/interface"

const ChangePasswordArea = ({ config }: ISettingsConfig) => {
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
					value={config.password1}
					placeholder="Nova senha:"
					onChange={(event: { target: { value: string } }) =>
						config.handlePassword1(event.target.value.trim())
					}
				/>
				<Input
					typeinput="input"
					size="sm"
					type="text"
					value={config.password2}
					placeholder="Repetir nova senha:"
					onChange={(event: { target: { value: string } }) =>
						config.handlePassword2(event.target.value.trim())
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

			{config.statusCode > 0 && (
				<p
					className={
						config.statusCode == 200 ? "text-green-400 mt-2" : "text-red mt-2"
					}>
					{config.apiResponse}
				</p>
			)}
		</div>
	)
}

export default ChangePasswordArea
