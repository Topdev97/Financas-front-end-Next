/* eslint-disable react-hooks/rules-of-hooks */
import { useClient, useAuthClient } from "@/clients/AxiosClient"
import { Permissions, Routes } from "@/utils/enum"
import { IUsers } from "..//utils/interface"

export const createUser = async (user: IUsers) => {
	try {
		const data = {
			name: user.name,
			email: user.email,
			service: "SaveMoney",
			role: [Permissions.USER],
		}

		const res = await useAuthClient().post(Routes.SAVE_USER, data)

		return res
	} catch (error) {
		return error
	}
}

export const changePassword = async (email: string, password: string) => {
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
