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

	const screenWidth = window.innerWidth
	const [showAnimation, setShowAnimation] = useState(
		screenWidth <= 767 ? true : false,
	)

	useEffect(() => {
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
