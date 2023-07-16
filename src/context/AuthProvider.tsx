"use client"

import { createContext, useState } from "react"
import { IAuth, IProps } from "../utils/interface"
import { signin } from "@/api/signin"
import React from "react"

export const AuthContext = createContext({} as IAuth)

function AuthProvider({ children }: IProps) {
	const [showRegisterArea, setShowRegisterArea] = useState(false)
	const [showAcessArea, setAcessArea] = useState(true)
	const [showButton, setShowButton] = useState(false)
	// const [apiResponse, setApiResponse] = useState("")
	// const [statusCode, setStatusCode] = useState(0)

	const openRegisterArea = () => {
		setShowRegisterArea(true)
		setAcessArea(false)
	}

	const closeRegisterArea = () => {
		setAcessArea(true)
		setShowRegisterArea(false)
		setShowButton(false)
	}

	// const handleApiResponse = (status: number) => {
	// 	setStatusCode(status)

	// 	if (status == 201) {
	// 	} else if (status == 409) {
	// 		setApiResponse(Messages.EXISTING_USER)
	// 	} else {
	// 		setApiResponse(Messages.SERVER_ERROR)
	// 	}
	// }

	const login = async (user: any) => {
		const res: any = await signin(user)
		console.log(res)
	}

	return (
		<AuthContext.Provider
			value={{
				openRegisterArea,
				showRegisterArea,
				closeRegisterArea,
				showButton,
				showAcessArea,
				login,
			}}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
