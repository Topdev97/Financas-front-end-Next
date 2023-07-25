/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import { validateEqualPasswords } from "@/utils/validateEqualPasswords"
import { Messages } from "@/utils/enum"
import { generateNewPassword } from "@/api/users"
import { useAuth } from "@/hooks"
import Loading from "@/components/molecules/Loading"
import { registerSalary, takeSalary } from "@/api/salary"
import SalaryArea from "@/components/organisms/SalaryArea"
import ChangePasswordArea from "@/components/organisms/ChangePasswordArea"

const SettingsContainer = () => {
	const [activeEdit, setActiveEdit] = useState(false)
	const [showButton, setShowButton] = useState(false)
	const [showSaveSalaryButton, setShowSaveSalaryButton] = useState(false)
	const [showLoading, setShowLoading] = useState(false)
	const [password1, setPassword1] = useState("")
	const [password2, setPassword2] = useState("")
	const [response, setResponse] = useState("")
	const [statusCode, setStatusCode] = useState(0)
	const [salaryStatusCode, setSalaryStatusCode] = useState(0)
	const [salaryValue, setSalaryValue] = useState("")
	const { userId } = useAuth()

	useEffect(() => {
		getSalary()
	}, [])

	const apiResponse = {
		statusCode: statusCode,
		response: response,
	}

	const setToInitialState = () => {
		setResponse("")
		setStatusCode(0)
		setSalaryStatusCode(0)
	}

	const handlePassword1 = (value: string) => {
		setToInitialState()

		setPassword1(value)

		const validate = validateEqualPasswords(value, password2)

		setShowButton(validate)
	}

	const handlePassword2 = (value: string) => {
		setToInitialState()

		setPassword2(value)

		const validate = validateEqualPasswords(password1, value)

		setShowButton(validate)
	}

	const handleApiResponse = (status: number) => {
		if (status == 200) {
			setStatusCode(status)
			setResponse(Messages.UPDATED_PASSWORD)
			setPassword1("")
			setPassword2("")
			setShowButton(false)
		} else if (status == 201) {
			getSalary()
			setSalaryValue("")
			setSalaryStatusCode(status)
			setActiveEdit(false)
			setShowSaveSalaryButton(false)
			setResponse(Messages.SUCCESS_IN_SAVING_SALARY)
		} else {
			setResponse(Messages.SERVER_ERROR)
		}
	}

	const redefinePassword = async () => {
		setShowLoading(true)

		const res: any = await generateNewPassword(password2, userId)

		handleApiResponse(res?.status)

		setShowLoading(false)
	}

	const handleSalary = (value: string) => {
		setSalaryValue(value)

		setShowSaveSalaryButton(value != "" ? true : false)
	}

	const handleEdit = () => {
		setToInitialState()
		setActiveEdit(!activeEdit)
	}

	const saveSalary = async () => {
		setShowLoading(true)

		const res: any = await registerSalary(Number(salaryValue), userId)

		handleApiResponse(res?.status)

		setShowLoading(false)
	}

	const getSalary = async () => {
		setShowLoading(true)

		const res: any = await takeSalary(userId)

		if (res?.data) setSalaryValue(res?.data.value)

		setShowLoading(false)
	}

	const config = {
		activeEdit,
		showButton,
		apiResponse,
		statusCode,
		password1,
		password2,
		salaryValue,
		salaryStatusCode,
		showSaveSalaryButton,
		setSalaryValue,
		saveSalary,
		handleEdit,
		handlePassword1,
		handlePassword2,
		redefinePassword,
		handleSalary,
	}

	return (
		<>
			{showLoading && <Loading />}

			<div className="h-screen px-8 py-6">
				<SalaryArea config={config} />

				<ChangePasswordArea config={config} />
			</div>
		</>
	)
}

export default SettingsContainer
