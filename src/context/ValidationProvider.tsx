"use client"
import { IProps, IValidationContext } from "@/utils/interface"
import React, { createContext, useCallback } from "react"

export const ValidationContext = createContext({} as IValidationContext)

const ValidationProvider = ({ children }: IProps) => {
	const validateEmail = (email: string): boolean => {
		let regex = false

		if (email != "") regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

		return regex
	}

	const validateEqualPasswords = (
		password1: string,
		password2: string,
	): boolean => {
		if (password1 != "" && password2 != "") {
			if (password1 === password2) {
				return true
			}
		}

		return false
	}

	const handleFieldChange = useCallback(
		(fieldName: string, value: string, setFormData: Function) => {
			setFormData((prevData: any) => ({
				...prevData,
				[fieldName]: value,
			}))
		},
		[],
	)

	return (
		<ValidationContext.Provider
			value={{
				validateEmail,
				validateEqualPasswords,
				handleFieldChange,
			}}>
			{children}
		</ValidationContext.Provider>
	)
}

export default ValidationProvider
