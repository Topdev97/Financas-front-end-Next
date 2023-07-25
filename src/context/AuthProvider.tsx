/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { createContext, useState } from "react"
import { IAuth, IProps } from "../utils/interface"
import React, { useEffect } from "react"
import { getPayload } from "@/api/signin"
import { setupClient } from "@/clients/AxiosClient"
import { setBearerAuthorization, useClient } from "../clients/AxiosClient"
import { isAuthenticated } from "@/utils/permissions"

export const AuthContext = createContext({} as IAuth)

const AuthProvider = ({ children }: IProps) => {
	const [showRegisterArea, setShowRegisterArea] = useState(false)
	const [showAcessArea, setAcessArea] = useState(true)
	const [userId, setUserId] = useState("")
	const [showRedefinePasswordArea, setShowRedefinePasswordArea] =
		useState(false)

	const clientConfig = () => {
		setupClient(process.env.NEXT_PUBLIC_BACK)
		setBearerAuthorization(useClient(), isAuthenticated())
	}

	const getUserId = async () => {
		const payload = await getPayload()
		setUserId(payload?.data.userId)
	}

	useEffect(() => {
		clientConfig()

		getUserId()
	}, [])
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
