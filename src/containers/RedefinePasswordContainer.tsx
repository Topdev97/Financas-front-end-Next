/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from "react"
import RedefinePassword from "@/components/organisms/RedefinePasswordArea"
import { useAsync, useAuth, useValidation } from "@/hooks"
import { generateNewPassword } from "@/api/users"
import { Messages } from "@/utils/enum"

const RedefinePasswordContainer = () => {
	const [formData, setFormData] = useState({
		email: "",
	})

	const { execute, clearApiResponse } = useAsync()
	const { validateEmail } = useValidation()

	const showButton = useMemo(() => {
		return Object.values(formData).every(
			(values) => values != "" && validateEmail(formData.email),
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
			generateNewPassword(formData.email),
			Messages.CHANGE_PASSWORD,
			Messages.SERVER_ERROR,
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
