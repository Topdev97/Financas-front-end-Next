/* eslint-disable react-hooks/rules-of-hooks */
import { useClient } from "@/clients/AxiosClient"
import { Routes } from "@/utils/enum"

export const registerSalary = async (value: number, id: string) => {
	try {
		const data = {
			value,
		}

		const res = await useClient().put(`${Routes.SAVE_SALARY}${id}`, data)

		return res
	} catch (error) {
		return error
	}
}

export const takeSalary = async (id: string) => {
	try {
		const res = await useClient().get(`${Routes.GET_SALARY}${id}`)

		return res
	} catch (error) {
		return error
	}
}
