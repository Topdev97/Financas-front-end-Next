import { getNewToken } from "@/api/refreshToken"
import { removeItems } from "@/utils/permissions"
import { notification } from "antd"
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios"

export const handleRequest = async (
	options: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
	return options
}

export const handleResponse = async (
	response: AxiosResponse,
): Promise<AxiosResponse<any, any>> => {
	if (response.status === 401) {
		const token = await getNewToken()

		if (token) {
			const instance = axios.create()

			response.config.headers["Authorization"] = `Bearer ${token}`
			const result = await instance.request({
				...response.config,
			})

			return result
		} else {
			removeItems()
			setTimeout(() => {
				location.href = "/"
			}, 6000)

			notification.open({
				message: "Sessão encerrada",
				description: "Sua sessão expirou, por favor, logue novamente",
			})

			return response
		}
	}

	return response
}

export const handleError = (error: any): Promise<never> => {
	return Promise.reject(error)
}

export const interceptors = {
	handleRequest,
	handleResponse,
	handleError,
}
