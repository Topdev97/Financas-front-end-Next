"use client"

import React, { useState, useEffect } from "react"
import animation from "@/assets/lottieFiles/animation.json"
import { Container, Wrapper } from "../atoms"
import Lottie from "lottie-react"

const Loading = () => {
	const [message, setMessage] = useState(
		"Aguarde, estamos reunindo suas informações",
	)

	useEffect(() => {
		setTimeout(() => {
			setMessage("Validando as informações...")
		}, 10000)

		setTimeout(() => {
			setMessage("Estamos preparando tudo...")
		}, 20000)

		setTimeout(() => {
			setMessage("Só mais um momento, estamos quase lá!")
		}, 30000)
	}, [])

	return (
		<Container type="loading">
			<Wrapper type="modal">
				<div className="flex flex-col items-center justify-around">
					<Lottie
						animationData={animation}
						style={{ width: "30rem", marginTop: "-8rem" }}
					/>
					<h1 className="-mt-16 text-[1.5rem] text-white">{message}</h1>
				</div>
			</Wrapper>
		</Container>
	)
}

export default Loading
