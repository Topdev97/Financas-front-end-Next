/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { IAuth, IProps } from "../utils/interface"
import React, { useEffect, createContext, useState } from "react"
import { getPayload } from "@/api/signin"
import { setupClient, useAuthClient } from "@/clients/AxiosClient"
import { setBearerAuthorization, useClient } from "../clients/AxiosClient"
import { isAuthenticated } from "@/utils/permissions"
import { useAsync } from "@/hooks"

export const AuthContext = createContext({} as IAuth)

const AuthProvider = ({ children }: IProps) => {
	const [showRegisterArea, setShowRegisterArea] = useState(false)
	const [showAcessArea, setAcessArea] = useState(true)
	const [userId, setUserId] = useState("")
	const [email, setEmail] = useState("")
	const [showRedefinePasswordArea, setShowRedefinePasswordArea] =
		useState(false)

	const { execute } = useAsync()

	const clientConfig = () => {
		setupClient(process.env.NEXT_PUBLIC_BACK, process.env.NEXT_PUBLIC_AUTH)
		setBearerAuthorization(useClient(), isAuthenticated())
		setBearerAuthorization(useAuthClient(), isAuthenticated())
	}

	const getUserId = async () => {
		const payload = await execute(getPayload())

		console.log(payload)

		if (payload?.status == 200) {
			setUserId(payload?.data.userId)
			setEmail(payload?.data.email)
		}
	}

	useEffect(() => {
		clientConfig()

		if (window.location.pathname != "/") getUserId()
	}, [])

	return (
		<AuthContext.Provider
			value={{
				setShowRegisterArea,
				setAcessArea,
				clientConfig,
				setUserId,
				getUserId,
				setShowRedefinePasswordArea,
				showRedefinePasswordArea,
				showRegisterArea,
				showAcessArea,
				userId,
				email,
			}}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
