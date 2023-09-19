/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from "react"
import RegisterArea from "../components/organisms/RegisterArea"
import { createUser } from "../api/users"
import { useAsync, useAuth, useValidation } from "@/hooks"
import { Messages } from "@/utils/enum"

const RegisterContainer = () => {
	const [eyesIcon, setEyesIcon] = useState(false)
	const [type, setType] = useState("password")
	const [formData, setFormData] = useState({
		email: "",
		email2: "",
		name: "",
	})

	const { setAcessArea, setShowRegisterArea } = useAuth()
	const { validateEmail, validateEqualEmails } = useValidation()
	const { execute, clearApiResponse } = useAsync()

	const showButton = useMemo(() => {
		return Object.values(formData).every(
			(value) =>
				value != "" &&
				validateEmail(formData.email) &&
				validateEmail(formData.email2) &&
				validateEqualEmails(formData.email, formData.email2),
		)
	}, [formData])

	const createUsers = () => {
		execute(
			createUser(formData),
			Messages.SUCCESS_IN_CREATING_USER,
			Messages.EXISTING_USER,
		)
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
		clearApiResponse()
	}

	const config = {
		showButton,
		formData,
		eyesIcon,
		type,
		setFormData,
		showPassword,
		createUsers,
		closeRegisterArea,
	}

	return (
		<>
			<RegisterArea config={config} />
		</>
	)
}

export default RegisterContainer
