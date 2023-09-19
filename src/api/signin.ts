/* eslint-disable react-hooks/rules-of-hooks */
import {
	setBearerAuthorization,
	useAuthClient,
	setBasicAuthorization,
} from "@/clients/AxiosClient"
import { Routes } from "@/utils/enum"
import { setIsAuthenticated, setPermission } from "@/utils/permissions"

export const signin = async (user: any) => {
	try {
		const encode = btoa(`${user.email}:${user.password}`)

		setBasicAuthorization(useAuthClient(), encode)

		const res = await useAuthClient().post(Routes.LOGIN)

		if (res?.status == 403) {
			return res
		}

		await setTokenAndPermission(res)

		return res
	} catch (error) {
		return error
	}
}

export const getPayload = async () => {
	try {
		const res = await useAuthClient().get(Routes.PAYLOAD)

		return res
	} catch (error: any) {
		return error
	}
}

const setTokenAndPermission = (res: any) => {
	const token = res.data.token

	const refreshToken = res.data.refreshToken

	const roles = res.data.permission

	console.log("per", res)

	setBearerAuthorization(useAuthClient(), token)

	setIsAuthenticated(token, refreshToken)

	setPermission(roles)
}
