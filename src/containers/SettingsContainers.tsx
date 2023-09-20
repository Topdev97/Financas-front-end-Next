/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import { Messages } from "@/utils/enum"
import { generateNewPassword } from "@/api/users"
import { useAsync, useAuth, useRelease } from "@/hooks"
import Loading from "@/components/molecules/Loading"
import { registerSalary } from "@/api/salary"
import SalaryArea from "@/components/organisms/SalaryArea"
import ChangePasswordArea from "@/components/organisms/ChangePasswordArea"
import { Container } from "@/components/atoms"
import ApiResponse from "./ApiResponseContainer"

const SettingsContainer = () => {
	const [activeEdit, setActiveEdit] = useState(false)

	const [showSaveSalaryButton, setShowSaveSalaryButton] = useState(false)

	const { userId, email } = useAuth()
	const { execute, showLoading, apiResponse, clearApiResponse } = useAsync()
	const { salaryValue, setSalaryValue, getSalary } = useRelease()

	useEffect(() => {
		clearApiResponse()

		getSalary()
	}, [userId])

	const handleSalary = (value: string) => {
		setSalaryValue(value)
		setShowSaveSalaryButton(value != "" ? true : false)
	}

	const handleEdit = () => {
		setActiveEdit(!activeEdit)
	}

	const handleApiResponse = (status: number) => {
		if (status == 201) {
			getSalary()
			setSalaryValue("")
			setActiveEdit(false)
			setShowSaveSalaryButton(false)
		}
	}

	const redefinePassword = async () => {
		const res: any = await execute(
			generateNewPassword(email, userId),
			Messages.CHANGE_PASSWORD,
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

	const config = {
		activeEdit,
		showSaveSalaryButton,
		saveSalary,
		handleEdit,
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
