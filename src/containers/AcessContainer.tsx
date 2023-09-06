/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react"
import AcessArea from "../components/organisms/AcessArea"
import { Messages } from "@/utils/enum"
import { signin } from "@/api/signin"
import { useRouter } from "next/navigation"
import { useAsync, useAuth, useValidation } from "@/hooks"
import AcessAreaMobile from "@/components/molecules/AcessAreaMobile"

const AcessContainer = () => {
	const [eyesIcon, setEyesIcon] = useState(false)
	const [type, setType] = useState("password")
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})

	const [showLogo, setShowLogo] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setShowLogo(false)
		}, 6000)
	}, [])

	const { validateEmail } = useValidation()

	const router = useRouter()

	const { setShowRegisterArea, setAcessArea, setShowRedefinePasswordArea } =
		useAuth()

	const { execute, clearApiResponse } = useAsync()

	const showPassword = () => {
		setEyesIcon(!eyesIcon)

		if (type == "password") {
			setType("text")
		} else {
			setType("password")
		}
	}

	const showButton = useMemo(() => {
		return Object.values(formData).every(
			(value) => value != "" && validateEmail(formData.email),
		)
	}, [formData])

	const login = async (user: any) => {
		const res: any = await execute(
			signin(user),
			"",
			Messages.INCORRECT_EMAIL_OR_PASSWORD,
		)

		if (res?.status == 200) router.push("/lancamentos")
	}

	const openRegisterArea = () => {
		setShowRegisterArea(true)
		setAcessArea(false)
		setShowRedefinePasswordArea(false)
		clearApiResponse()
	}

	const openRedefinePasswordArea = () => {
		setShowRegisterArea(false)
		setAcessArea(false)
		setShowRedefinePasswordArea(true)
		clearApiResponse()
	}

	const config = {
		eyesIcon,
		type,
		showButton,
		formData,
		showPassword,
		login,
		openRegisterArea,
		openRedefinePasswordArea,
		setFormData,
	}

	return <>{showLogo ? <AcessAreaMobile /> : <AcessArea config={config} />}</>
}

export default AcessContainer
