/* eslint-disable react-hooks/rules-of-hooks */

import axios, { AxiosInstance } from "axios"
import { interceptors } from "./Interceptors"

let restClient: AxiosInstance
let authClient: AxiosInstance

export const setupClient = (
	baseUrl: string | undefined,
	authUrl: string | undefined,
) => {
	restClient = axios.create({
		baseURL: baseUrl,
		validateStatus(status) {
			return status < 500
		},
	})

	authClient = axios.create({
		baseURL: authUrl,
		validateStatus(status) {
			return status < 500
		},
	})

	restClient.interceptors.request.use(
		interceptors.handleRequest,
		interceptors.handleError,
	)

	restClient.interceptors.response.use(
		interceptors.handleResponse,
		interceptors.handleError,
	)
}

export const setBearerAuthorization = (
	client: AxiosInstance,
	token: string,
) => {
	client.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export const setBasicAuthorization = (
	client: AxiosInstance,
	encode: string,
) => {
	client.defaults.headers.common["Authorization"] = `Basic ${encode}`
}

export const setContentType = (client: AxiosInstance) => {
	client.defaults.headers.common["Content-Type"] = "application/json"
}

export const useClient = () => restClient
export const useAuthClient = () => authClient
