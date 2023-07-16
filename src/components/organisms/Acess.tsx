"use client"

import React from "react"
import { Container } from "../atoms"
import AcessContainer from "../molecules/Acess/AcessContainer"
import LogoArea from "../molecules/LogoArea"
import RegisterContainer from "../molecules/Register/RegisterContainer"
import useAuth from "@/hooks/useAuth"

const Acess = () => {
	const { showRegisterArea, showAcessArea } = useAuth()

	return (
		<Container typeContainers="Container">
			{showAcessArea && <AcessContainer />}

			{showRegisterArea && <RegisterContainer />}

			<LogoArea />
		</Container>
	)
}

export default Acess
