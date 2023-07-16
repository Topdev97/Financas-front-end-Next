import React from "react"
import { Container, H1, Paragraph } from "../atoms"
import Icon from "@mdi/react"
import { mdiCash } from "@mdi/js"

const LogoArea = () => {
	return (
		<Container typecontainers="logoContainer">
			<Icon path={mdiCash} size={18} className="-mt-36 logo" />

			<H1 className="-mt-24">SaveMoney</H1>

			<Paragraph>A maneira inteligente de adminstrar seu dinheiro</Paragraph>
		</Container>
	)
}

export default LogoArea
