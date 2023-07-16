/* eslint-disable react-hooks/rules-of-hooks */
import {
	setBearerAuthorization,
	useClient,
	setBasicAuthorization,
} from "@/clients/AxiosClient"
import { Routes } from "@/utils/enum"
import { setIsAuthenticated, setPermission } from "@/utils/permissions"

export const signin = async (user: any) => {
	try {
		const encode = btoa(`${user.email}:${user.password}`)

		setBasicAuthorization(useClient(), encode)

		const res = await useClient().post(Routes.LOGIN)

		if (res?.status == 403) {
			return res
		}

		const token = res.data.token
		const refreshToken = res.data.refreshToken

		setBearerAuthorization(useClient(), token)

		const payload: any = await getPayload()

		const userId = payload.data.userId

		const roles = payload.data.permission

		setIsAuthenticated(token, refreshToken)

		setPermission(roles)

		return { res, userId }
	} catch (error) {
		return error
	}
}

export const getPayload = async () => {
	try {
		const res = await useClient().get(Routes.PAYLOAD)

		return res
	} catch (error: any) {
		return error.response.status
	}
}
