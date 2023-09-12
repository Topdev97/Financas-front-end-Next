/* eslint-disable react-hooks/rules-of-hooks */
import { setBearerAuthorization, useClient } from "../clients/AxiosClient"
import { Routes } from "../utils/enum"
import { getRefreshToken, setIsAuthenticated } from "../utils/permissions"
import axios from "axios"

export const getNewToken = async () => {
	try {
		const config: any = {
			method: "POST",
			url: `${process.env.NEXT_PUBLIC_BACK}${Routes.REFRESH_TOKEN}`,
			headers: { Authorization: `Bearer ${getRefreshToken()}` },
		}

		const res = await axios(config)

		if (res?.status == 200) {
			const token = res.data.token
			const refreshToken = res.data.refreshToken

			setBearerAuthorization(useClient(), token)

			setIsAuthenticated(token, refreshToken)

			return token
		}

		throw new Error("Não foi possível gerar um novo token")
	} catch (error) {
		return null
	}
}
