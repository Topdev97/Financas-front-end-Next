/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from "react"
import RedefinePassword from "@/components/organisms/RedefinePasswordArea"
import { useAsync, useAuth, useValidation } from "@/hooks"
import { changePassword } from "@/api/users"
import { Messages } from "@/utils/enum"

const RedefinePasswordContainer = () => {
	const [formData, setFormData] = useState({
		email: "",
		password1: "",
		password2: "",
	})

	const { execute, clearApiResponse } = useAsync()
	const { validateEmail, validateEqualPasswords } = useValidation()

	const showButton = useMemo(() => {
		return Object.values(formData).every(
			(values) =>
				values != "" &&
				validateEmail(formData.email) &&
				validateEqualPasswords(formData.password1, formData.password2),
		)
	}, [formData])

	const { setAcessArea, setShowRegisterArea, setShowRedefinePasswordArea } =
		useAuth()

	const closeRedefinePasswordArea = () => {
		setAcessArea(true)
		setShowRegisterArea(false)
		setShowRedefinePasswordArea(false)
		clearApiResponse()
	}

	const redefinePassword = () => {
		execute(
			changePassword(formData.email, formData.password2),
			Messages.UPDATED_PASSWORD,
			Messages.EMAIL_NOT_FOUND,
		)
	}

	const config = {
		formData,
		showButton,
		setFormData,
		closeRedefinePasswordArea,
		redefinePassword,
	}
	return (
		<>
			<RedefinePassword config={config} />
		</>
	)
}

export default RedefinePasswordContainer
