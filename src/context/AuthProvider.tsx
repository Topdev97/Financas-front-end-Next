"use client"

import { createContext, useState } from "react"
import { IAuth, IProps } from "../utils/interface"
import React from "react"

export const AuthContext = createContext({} as IAuth)

function AuthProvider({ children }: IProps) {
	const [showRegisterArea, setShowRegisterArea] = useState(false)
	const [showAcessArea, setAcessArea] = useState(true)
	const [showRedefinePasswordArea, setShowRedefinePasswordArea] =
		useState(false)
	const [userId, setUserId] = useState("")

	return (
		<AuthContext.Provider
			value={{
				setShowRegisterArea,
				setAcessArea,
				showRedefinePasswordArea,
				setShowRedefinePasswordArea,
				showRegisterArea,
				showAcessArea,
				userId,
				setUserId,
			}}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
