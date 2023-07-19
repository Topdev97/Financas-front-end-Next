/* eslint-disable react-hooks/rules-of-hooks */
import { useClient } from "@/clients/AxiosClient"
import { Routes } from "@/utils/enum"
import { IUsers } from "..//utils/interface"

export const createUser = async (user: IUsers) => {
	try {
		const data = {
			name: user.name,
			email: user.email,
			password: user.password,
		}

		const res = await useClient().post(Routes.SAVE_USER, data)

		return res
	} catch (error) {
		return error
	}
}

export const changePassword = async (password: string, email: string) => {
	try {
		const data: any = {
			email,
			password,
		}

		const res = await useClient().put(Routes.REDEFINE_PASSWORD, data)

		return res
	} catch (error) {
		return error
	}
}

export const generateNewPassword = async (password: string, id: string) => {
	try {
		const data: any = {
			password,
		}

		const res = await useClient().put(`${Routes.NEW_PASSWORD}${id}`, data)

		return res
	} catch (error) {
		return error
	}
}
