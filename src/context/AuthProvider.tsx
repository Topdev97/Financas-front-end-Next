/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { IAuth, IProps } from "../utils/interface"
import React, { useEffect, createContext, useState } from "react"
import { getPayload } from "@/api/signin"
import { setupClient } from "@/clients/AxiosClient"
import { setBearerAuthorization, useClient } from "../clients/AxiosClient"
import { isAuthenticated } from "@/utils/permissions"
import { useAsync } from "@/hooks"

export const AuthContext = createContext({} as IAuth)

const AuthProvider = ({ children }: IProps) => {
	const [showRegisterArea, setShowRegisterArea] = useState(false)
	const [showAcessArea, setAcessArea] = useState(true)
	const [userId, setUserId] = useState("")
	const [showRedefinePasswordArea, setShowRedefinePasswordArea] =
		useState(false)

	const { execute } = useAsync()

	const clientConfig = () => {
		setupClient(process.env.NEXT_PUBLIC_BACK)
		setBearerAuthorization(useClient(), isAuthenticated())
	}

	const getUserId = async () => {
		const payload = await execute(getPayload())

		if (payload?.status == 200) {
			setUserId(payload?.data.userId)
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
				showRedefinePasswordArea,
				setShowRedefinePasswordArea,
				showRegisterArea,
				showAcessArea,
				userId,
				setUserId,
				getUserId,
			}}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
