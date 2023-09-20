import React from "react"
import { Button, Paragraph } from "../atoms"
import { ISettingsConfig } from "@/utils/interface"

const ChangePasswordArea = ({ config }: ISettingsConfig) => {
	return (
		<div className="mt-10">
			<Paragraph size="lg" color="gray">
				Troque a sua senha:
			</Paragraph>

			<div className="flex space-x-5 mt-2 items-center">
				<Button
					size="lg"
					color="green"
					onClick={() => config.redefinePassword()}
					className="bg-light_green">
					Redefinir
				</Button>
			</div>
		</div>
	)
}

export default ChangePasswordArea
