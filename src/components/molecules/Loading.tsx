"use client"

import React, { useState, useEffect } from "react"
import PacmanLoader from "react-spinners/PacmanLoader"
import { Container } from "../atoms"

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
		<Container typeContainers="loadingContainer">
			<Container typeContainers="modalContainer">
				<div className="flex flex-col items-center justify-around">
					<PacmanLoader size="35" color="#fff" aria-label="OI" />
					<h1 className="mt-3 text-[1.5rem] text-white">{message}</h1>
				</div>
			</Container>
		</Container>
	)
}

export default Loading
