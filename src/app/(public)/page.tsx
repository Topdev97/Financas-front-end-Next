"use client"

import React, { useEffect } from "react"
import { Container } from "../../components/atoms"
import AcessContainer from "../../containers/AcessContainer"
import RedefinePasswordContainer from "@/containers/RedefinePasswordContainer"
import LogoArea from "../../components/molecules/LogoArea"
import RegisterContainer from "../../containers/RegisterContainer"
import { useAsync, useAuth } from "@/hooks"
import { setupClient } from "@/clients/AxiosClient"
import Loading from "@/components/molecules/Loading"

export default function Home() {
	const { showRegisterArea, showAcessArea, showRedefinePasswordArea } =
		useAuth()

	const { showLoading } = useAsync()

	useEffect(() => {
		setupClient(process.env.NEXT_PUBLIC_BACK)
	}, [])

	return (
		<Container type="auth">
			{showLoading && <Loading />}

			{showAcessArea && <AcessContainer />}

			{showRegisterArea && <RegisterContainer />}

			{showRedefinePasswordArea && <RedefinePasswordContainer />}

			<LogoArea />
		</Container>
	)
}
