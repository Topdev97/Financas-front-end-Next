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
