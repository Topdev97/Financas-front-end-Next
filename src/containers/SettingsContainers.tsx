/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState, useEffect } from "react"
import { Messages } from "@/utils/enum"
import { generateNewPassword } from "@/api/users"
import { useAsync, useAuth, useRelease, useValidation } from "@/hooks"
import Loading from "@/components/molecules/Loading"
import { registerSalary } from "@/api/salary"
import SalaryArea from "@/components/organisms/SalaryArea"
import ChangePasswordArea from "@/components/organisms/ChangePasswordArea"
import { Container } from "@/components/atoms"
import ApiResponse from "./ApiResponseContainer"
import { hasPermission, removeItems } from "@/utils/permissions"
import { useRouter } from "next/navigation"
import { Permissions } from "@/utils/enum"

const SettingsContainer = () => {
	const [activeEdit, setActiveEdit] = useState(false)

	const [showSaveSalaryButton, setShowSaveSalaryButton] = useState(false)

	const { userId } = useAuth()
	const { validateEqualPasswords } = useValidation()
	const { execute, showLoading, apiResponse, clearApiResponse } = useAsync()
	const { salaryValue, setSalaryValue, getSalary } = useRelease()
	const [formData, setFormData] = useState({
		password1: "",
		password2: "",
	})

	const router = useRouter()

	useEffect(() => {
		if (!hasPermission([Permissions.USER])) {
			removeItems()
			router.push("/")
		}

		clearApiResponse()
		getSalary()
	}, [userId])

	const showButton = useMemo(() => {
		return validateEqualPasswords(formData.password1, formData.password2)
	}, [formData])

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
			generateNewPassword(formData.password2, userId),
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

	const config = {
		activeEdit,
		showButton,
		showSaveSalaryButton,
		formData,
		setFormData,
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
