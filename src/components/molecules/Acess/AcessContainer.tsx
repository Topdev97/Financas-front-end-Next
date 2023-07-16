import React, { useState } from "react"
import AcessArea from "./AcessArea"
import Loading from "../Loading"

const AcessContainer = () => {
	const [showLoading] = useState(false)
	const [showButton, setShowButton] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [eyesIcon, setEyesIcon] = useState(false)
	const [type, setType] = useState("password")

	const showPassword = () => {
		setEyesIcon(!eyesIcon)

		if (type == "password") {
			setType("text")
		} else {
			setType("password")
		}
	}

	const handleEmail = (value: string) => {
		setEmail(value)

		if (password && validateEmail(value)) {
			setShowButton(true)
		} else {
			setShowButton(false)
		}
	}

	const handlePassword = (value: string) => {
		setPassword(value)

		if (value != "" && validateEmail(email)) {
			setShowButton(true)
		} else {
			setShowButton(false)
		}
	}

	const validateEmail = (email: string): boolean => {
		let regex = false

		if (email != "") regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

		return regex
	}

	return (
		<>
			{showLoading && <Loading />}
			<AcessArea
				showPassword={showPassword}
				eyesIcon={eyesIcon}
				type={type}
				showButton={showButton}
				email={email}
				password={password}
				handleEmail={handleEmail}
				handlePassword={handlePassword}
			/>
		</>
	)
}

export default AcessContainer
