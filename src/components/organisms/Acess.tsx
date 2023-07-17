"use client"

import React from "react"
import { Container } from "../atoms"
import AcessContainer from "../../containers/AcessContainer"
import RedefinePasswordContainer from "@/containers/RedefinePasswordContainer"
import LogoArea from "../molecules/LogoArea"
import RegisterContainer from "../../containers/RegisterContainer"
import useAuth from "@/hooks/useAuth"

const Acess = () => {
	const { showRegisterArea, showAcessArea, showRedefinePasswordArea } =
		useAuth()

	return (
		<Container typecontainers="Container">
			{showAcessArea && <AcessContainer />}

			{showRegisterArea && <RegisterContainer />}

			{showRedefinePasswordArea && <RedefinePasswordContainer />}

			<LogoArea />
		</Container>
	)
}

export default Acess
