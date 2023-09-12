"use client"

import React, { useEffect, useState } from "react"
import { Container } from "../../components/atoms"
import AcessContainer from "../../containers/AcessContainer"
import RedefinePasswordContainer from "@/containers/RedefinePasswordContainer"
import LogoArea from "../../components/molecules/LogoArea"
import RegisterContainer from "../../containers/RegisterContainer"
import { useAsync, useAuth } from "@/hooks"
import Loading from "@/components/molecules/Loading"
import AnimationArea from "@/components/molecules/AnimationArea"

export default function Home() {
	const { showRegisterArea, showAcessArea, showRedefinePasswordArea } =
		useAuth()

	const [showAnimation, setShowAnimation] = useState(false)

	useEffect(() => {
		const screenWidth = window.innerWidth

		if (screenWidth <= 767) setShowAnimation(true)

		setTimeout(() => {
			setShowAnimation(false)
		}, 6000)
	}, [])

	const { showLoading } = useAsync()

	return (
		<Container type="auth">
			{showLoading && <Loading />}

			{showAnimation ? (
				<AnimationArea />
			) : (
				<>
					{showAcessArea && <AcessContainer />}

					{showRegisterArea && <RegisterContainer />}

					{showRedefinePasswordArea && <RedefinePasswordContainer />}

					<LogoArea />
				</>
			)}
		</Container>
	)
}
