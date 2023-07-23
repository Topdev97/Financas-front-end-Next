/* eslint-disable react-hooks/rules-of-hooks */
import { useClient } from "@/clients/AxiosClient"
import { Routes } from "@/utils/enum"

export const registerCategory = async (
	name: string,
	value: number,
	id: string,
) => {
	try {
		const data = {
			name,
			value,
		}

		const res = await useClient().post(`${Routes.SAVE_CATEGORY}${id}`, data)

		return res
	} catch (error) {
		return error
	}
}

export const getAllCategoriesApi = async (
	id: string,
	page: number,
	itemsPerPage: number,
) => {
	try {
		const data = {
			page,
			itemsPerPage,
		}

		const res = await useClient().post(`${Routes.GET_CATEGORIES}${id}`, data)

		return res
	} catch (error) {
		return error
	}
}

export const getNameOfAllCategoriesApi = async (id: string) => {
	try {
		const res = await useClient().post(`${Routes.GET_CATEGORY_NAME}${id}`)

		return res
	} catch (error) {
		return error
	}
}

export const getCategoryByidApi = async (id: string) => {
	try {
		const res = await useClient().post(`${Routes.GET_CATEGORY_BY_ID}${id}`)

		return res
	} catch (error) {
		return error
	}
}
