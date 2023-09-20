/* eslint-disable react-hooks/rules-of-hooks */
import { useAuthClient } from "@/clients/AxiosClient"
import { Permissions, Routes, Service } from "@/utils/enum"
import { IUsers } from "..//utils/interface"

export const createUser = async (user: IUsers) => {
	try {
		const data = {
			name: user.name,
			email: user.email,
			service: Service.SAVEMONEY,
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

		const res = await useAuthClient().put(Routes.REDEFINE_PASSWORD, data)

		return res
	} catch (error) {
		return error
	}
}

export const generateNewPassword = async (email: string, id?: string) => {
	try {
		const data: any = {
			email,
			service: Service.SAVEMONEY,
		}

		const res = await useAuthClient().put(
			`${Routes.CHANGE_PASSWORD}${id}`,
			data,
		)

		return res
	} catch (error) {
		return error
	}
}
