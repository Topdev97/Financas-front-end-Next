import React, { useState } from "react"
import AcessArea from "../components/molecules/AcessArea"
import Loading from "../components/molecules/Loading"
import { Messages } from "@/utils/enum"
import { signin } from "@/api/signin"
import { useRouter } from "next/navigation"
import useAuth from "@/hooks/useAuth"

const AcessContainer = () => {
	const [showLoading, setShowLoading] = useState(false)
	const [showButton, setShowButton] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [eyesIcon, setEyesIcon] = useState(false)
	const [type, setType] = useState("password")
	const [apiResponse, setApiResponse] = useState("")
	const [statusCode, setStatusCode] = useState(0)
	const router = useRouter()
	const {
		setUserId,
		setShowRegisterArea,
		setAcessArea,
		setShowRedefinePasswordArea,
	} = useAuth()

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

	const handleApiResponse = (status: number) => {
		setStatusCode(status)

		if (status == 200) {
			router.push("/home")
		} else if (status == 403) {
			setApiResponse(Messages.INCORRECT_EMAIL_OR_PASSWORD)
		} else {
			setApiResponse(Messages.SERVER_ERROR)
		}
	}

	const login = async (user: any) => {
		setShowLoading(true)
		setApiResponse("")

		const res: any = await signin(user)

		if (res.res?.status) {
			handleApiResponse(res.res?.status)
			setUserId(res?.userId)
		} else {
			handleApiResponse(res?.status)
		}

		setShowLoading(false)
	}

	const openRegisterArea = () => {
		setShowRegisterArea(true)
		setAcessArea(false)
		setShowRedefinePasswordArea(false)
	}

	const openRedefinePasswordArea = () => {
		setShowRegisterArea(false)
		setAcessArea(false)
		setShowRedefinePasswordArea(true)
	}

	return (
		<>
			{showLoading && <Loading />}

			<AcessArea
				eyesIcon={eyesIcon}
				type={type}
				showButton={showButton}
				email={email}
				password={password}
				apiResponse={apiResponse}
				statusCode={statusCode}
				showPassword={showPassword}
				handleEmail={handleEmail}
				handlePassword={handlePassword}
				login={login}
				openRegisterArea={openRegisterArea}
				openRedefinePasswordArea={openRedefinePasswordArea}
			/>
		</>
	)
}

export default AcessContainer
