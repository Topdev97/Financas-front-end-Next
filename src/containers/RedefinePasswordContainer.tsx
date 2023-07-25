import React, { useState } from "react"
import RedefinePassword from "@/components/organisms/RedefinePasswordArea"
import { validateEmail } from "@/utils/validateEmail"
import { useAuth } from "@/hooks"
import Loading from "@/components/molecules/Loading"
import { changePassword } from "@/api/users"
import { Messages } from "@/utils/enum"
import { validateEqualPasswords } from "@/utils/validateEqualPasswords"

const RedefinePasswordContainer = () => {
	const [showButton, setShowButton] = useState(false)
	const [showLoading, setShowLoading] = useState(false)
	const [password1, setPassword1] = useState("")
	const [password2, setPassword2] = useState("")
	const [email, setEmail] = useState("")
	const [response, setResponse] = useState("")
	const [statusCode, setStatusCode] = useState(0)
	const { setAcessArea, setShowRegisterArea, setShowRedefinePasswordArea } =
		useAuth()

	const apiResponse = {
		statusCode: statusCode,
		response: response,
	}

	const handleEmail = (value: string) => {
		setEmail(value)

		if (validateEqualPasswords(password1, password2) && validateEmail(value)) {
			setShowButton(true)
		} else {
			setShowButton(false)
		}
	}

	const handlePassword1 = (value: string) => {
		setPassword1(value)

		if (validateEqualPasswords(value, password2) && validateEmail(email)) {
			setShowButton(true)
		} else {
			setShowButton(false)
		}
	}

	const handlePassword2 = (value: string) => {
		setPassword2(value)

		if (validateEqualPasswords(password1, value) && validateEmail(email)) {
			setShowButton(true)
		} else {
			setShowButton(false)
		}
	}

	const closeRedefinePasswordArea = () => {
		setAcessArea(true)
		setShowRegisterArea(false)
		setShowRedefinePasswordArea(false)
		setShowButton(false)
	}

	const handleApiResponse = (status: number) => {
		setStatusCode(status)

		if (status == 200) {
			setResponse(Messages.UPDATED_PASSWORD)

			setEmail("")
			setPassword1("")
			setPassword2("")
			setShowButton(false)
		} else if (status == 404) {
			setResponse(Messages.EMAIL_NOT_FOUND)
		} else {
			setResponse(Messages.SERVER_ERROR)
		}
	}

	const redefinePassword = async () => {
		setShowLoading(true)

		const res: any = await changePassword(email, password2)

		handleApiResponse(res?.status)

		setShowLoading(false)
	}

	const config = {
		password1,
		password2,
		email,
		showButton,
		handleEmail,
		handlePassword1,
		handlePassword2,
		closeRedefinePasswordArea,
		redefinePassword,
		apiResponse,
		statusCode,
	}
	return (
		<>
			{showLoading && <Loading />}

			<RedefinePassword config={config} />
		</>
	)
}

export default RedefinePasswordContainer
