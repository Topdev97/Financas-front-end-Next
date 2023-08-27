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
import { useRouter } from "next/navigation"
import notification from "antd/es/notification"
import { FrownOutlined } from "@ant-design/icons"

export const AuthContext = createContext({} as IAuth)

const AuthProvider = ({ children }: IProps) => {
	const [showRegisterArea, setShowRegisterArea] = useState(false)
	const [showAcessArea, setAcessArea] = useState(true)
	const [userId, setUserId] = useState("")
	const [showRedefinePasswordArea, setShowRedefinePasswordArea] =
		useState(false)

	const { execute } = useAsync()
	const router = useRouter()

	const clientConfig = () => {
		setupClient(process.env.NEXT_PUBLIC_BACK)
		setBearerAuthorization(useClient(), isAuthenticated())
	}

	const getUserId = async () => {
		const payload = await execute(getPayload())

		if (payload?.status == 200) {
			setUserId(payload?.data.userId)
		} else {
			setTimeout(() => {
				router.push("/")
			}, 2000)
			notification.open({
				message: "Sessão encerrada",
				description: "Sua sessão expirou, por favor, logue novamente",
				icon: <FrownOutlined style={{ color: "#FF0F00" }} />,
			})
		}
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
