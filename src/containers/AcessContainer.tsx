import React, { useState } from "react"
import AcessArea from "../components/organisms/AcessArea"
import Loading from "../components/molecules/Loading"
import { Messages } from "@/utils/enum"
import { signin } from "@/api/signin"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks"
import { validateEmail } from "@/utils/validateEmail"

const AcessContainer = () => {
	const [showLoading, setShowLoading] = useState(false)
	const [showButton, setShowButton] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [eyesIcon, setEyesIcon] = useState(false)
	const [type, setType] = useState("password")
	const [response, setResponse] = useState("")
	const [statusCode, setStatusCode] = useState(0)
	const router = useRouter()
	const { setShowRegisterArea, setAcessArea, setShowRedefinePasswordArea } =
		useAuth()

	const apiResponse = {
		statusCode: statusCode,
		response: response,
	}

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

	const handleApiResponse = (status: number) => {
		setStatusCode(status)

		if (status == 200) {
			router.push("/lancamentos")
		} else if (status == 403) {
			setResponse(Messages.INCORRECT_EMAIL_OR_PASSWORD)
		} else {
			setResponse(Messages.SERVER_ERROR)
		}
	}

	const login = async (user: any) => {
		setShowLoading(true)
		setResponse("")

		const res: any = await signin(user)

		if (res.res?.status) {
			handleApiResponse(res.res?.status)
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

	const config = {
		eyesIcon,
		type,
		showButton,
		email,
		password,
		apiResponse,
		showPassword,
		handleEmail,
		handlePassword,
		login,
		openRegisterArea,
		openRedefinePasswordArea,
	}

	return (
		<>
			{showLoading && <Loading />}

			<AcessArea config={config} />
		</>
	)
}

export default AcessContainer
