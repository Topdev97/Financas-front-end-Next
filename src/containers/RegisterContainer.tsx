import React, { useState } from "react"
import RegisterArea from "../components/organisms/RegisterArea"
import { createUser } from "../api/users"
import Loading from "../components/molecules/Loading"
import useAuth from "@/hooks/useAuth"
import { Messages } from "@/utils/enum"
import { validateEmail } from "@/utils/validateEmail"

const RegisterContainer = () => {
	const [showButton, setShowButton] = useState(false)
	const [showLoading, setShowLoading] = useState(false)
	const [response, setResponse] = useState("")
	const [statusCode, setStatusCode] = useState(0)
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [eyesIcon, setEyesIcon] = useState(false)
	const [type, setType] = useState("password")
	const { setAcessArea, setShowRegisterArea } = useAuth()

	const apiResponse = {
		statusCode: statusCode,
		response: response,
	}

	const handleName = (value: string) => {
		setName(value)

		if (value != "" && password !== "" && validateEmail(email)) {
			setShowButton(true)
		} else {
			setShowButton(false)
		}
	}

	const handleEmail = (value: string) => {
		setEmail(value)

		if (password && name !== "" && validateEmail(value)) {
			setShowButton(true)
		} else {
			setShowButton(false)
		}
	}

	const handlePassword = (value: string) => {
		setPassword(value)

		if (value != "" && name !== "" && validateEmail(email)) {
			setShowButton(true)
		} else {
			setShowButton(false)
		}
	}

	const handleApiResponse = (status: number) => {
		setStatusCode(status)

		if (status == 201) {
			setResponse(Messages.SUCCESS_IN_CREATING_USER)
			setName("")
			setEmail("")
			setPassword("")
			setShowButton(false)
		} else if (status == 409) {
			setResponse(Messages.EXISTING_USER)
		} else {
			setResponse(Messages.SERVER_ERROR)
		}
	}

	const createUsers = async () => {
		setShowLoading(true)
		setResponse("")

		const res: any = await createUser({ name, email, password })

		handleApiResponse(res.status)

		setShowLoading(false)
	}

	const showPassword = () => {
		setEyesIcon(!eyesIcon)

		if (type == "password") {
			setType("text")
		} else {
			setType("password")
		}
	}

	const closeRegisterArea = () => {
		setAcessArea(true)
		setShowRegisterArea(false)
		setShowButton(false)
	}

	const config = {
		showButton,
		name,
		email,
		password,
		apiResponse,
		statusCode,
		eyesIcon,
		type,
		showPassword,
		handleName,
		handleEmail,
		handlePassword,
		createUsers,
		closeRegisterArea,
	}

	return (
		<>
			{showLoading && <Loading />}

			<RegisterArea config={config} />
		</>
	)
}

export default RegisterContainer
