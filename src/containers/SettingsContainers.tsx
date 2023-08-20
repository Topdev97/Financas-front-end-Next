/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import { validateEqualPasswords } from "@/utils/validateEqualPasswords"
import { Messages } from "@/utils/enum"
import { generateNewPassword } from "@/api/users"
import { useAsync, useAuth } from "@/hooks"
import Loading from "@/components/molecules/Loading"
import { registerSalary, takeSalary } from "@/api/salary"
import SalaryArea from "@/components/organisms/SalaryArea"
import ChangePasswordArea from "@/components/organisms/ChangePasswordArea"
import { Container } from "@/components/atoms"
import ApiResponse from "./ApiResponseContainer"

const SettingsContainer = () => {
	const [activeEdit, setActiveEdit] = useState(false)
	const [showButton, setShowButton] = useState(false)
	const [showSaveSalaryButton, setShowSaveSalaryButton] = useState(false)
	const [password1, setPassword1] = useState("")
	const [password2, setPassword2] = useState("")
	const [salaryValue, setSalaryValue] = useState("")
	const { userId } = useAuth()
	const { execute, showLoading, apiResponse, setShowLoading } = useAsync()

	useEffect(() => {
		getSalary()
	}, [])

	const handlePassword1 = (value: string) => {
		setPassword1(value)

		const validate = validateEqualPasswords(value, password2)

		setShowButton(validate)
	}

	const handlePassword2 = (value: string) => {
		setPassword2(value)

		const validate = validateEqualPasswords(password1, value)

		setShowButton(validate)
	}

	const handleSalary = (value: string) => {
		setSalaryValue(value)
		setShowSaveSalaryButton(value != "" ? true : false)
	}

	const handleEdit = () => {
		setActiveEdit(!activeEdit)
	}

	const handleApiResponse = (status: number) => {
		if (status == 200) {
			setPassword1("")
			setPassword2("")
			setShowButton(false)
		} else if (status == 201) {
			getSalary()
			setSalaryValue("")
			setActiveEdit(false)
			setShowSaveSalaryButton(false)
		}
	}

	const redefinePassword = async () => {
		const res: any = await execute(
			generateNewPassword(password2, userId),
			Messages.UPDATED_PASSWORD,
			Messages.SERVER_ERROR,
		)

		handleApiResponse(res?.status)
	}

	const saveSalary = async () => {
		const res: any = await execute(
			registerSalary(Number(salaryValue), userId),
			Messages.SUCCESS_IN_SAVING_SALARY,
			Messages.SERVER_ERROR,
		)

		handleApiResponse(res?.status)
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
		password1,
		password2,
		salaryValue,
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

			<Container type="container">
				<SalaryArea config={config} />

				<ChangePasswordArea config={config} />

				<div className="mt-2">
					<ApiResponse config={apiResponse} />
				</div>
			</Container>
		</>
	)
}

export default SettingsContainer
