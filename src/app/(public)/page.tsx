"use client"

import React, { useEffect } from "react"
import { Container } from "../../components/atoms"
import AcessContainer from "../../containers/AcessContainer"
import RedefinePasswordContainer from "@/containers/RedefinePasswordContainer"
import LogoArea from "../../components/molecules/LogoArea"
import RegisterContainer from "../../containers/RegisterContainer"
import useAuth from "@/hooks/useAuth"
import { setupClient } from "@/clients/AxiosClient"

export default function Home() {
	const { showRegisterArea, showAcessArea, showRedefinePasswordArea } =
		useAuth()

	useEffect(() => {
		setupClient(process.env.NEXT_PUBLIC_BACK)
	}, [])

	return (
		<Container typecontainers="Container">
			{showAcessArea && <AcessContainer />}

			{showRegisterArea && <RegisterContainer />}

			{showRedefinePasswordArea && <RedefinePasswordContainer />}

			<LogoArea />
		</Container>
	)
}
