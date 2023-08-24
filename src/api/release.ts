/* eslint-disable react-hooks/rules-of-hooks */
import { useClient } from "@/clients/AxiosClient"
import { Routes } from "@/utils/enum"
import { IPostingFormData } from "@/utils/interface"

export const createReleaseApi = async (
	formData: IPostingFormData,
	destinedValue: number,
	idRelease: string,
	userId: string,
	createdAt: string,
): Promise<any> => {
	try {
		const data = parseData(formData, idRelease, destinedValue, createdAt)

		const res = await useClient().post(`${Routes.SAVE_RELEASE}${userId}`, data)

		return res
	} catch (error) {
		return error
	}
}

export const getAllReleasesApi = async (
	id: string,
	page: number,
	itemsPerPage: number,
	createdAt: string,
) => {
	try {
		const data = {
			page,
			itemsPerPage,
			createdAt,
		}

		const res = await useClient().post(`${Routes.GET_RELEASES}${id}`, data)

		return res
	} catch (error) {
		return error
	}
}

export const deleteReleaseApi = async (
	id: string,
	category: string,
	idRelease: string,
) => {
	try {
		const data: any = {
			category,
			idRelease,
		}

		const res = await useClient().patch(`${Routes.DELETE_RELEASE}${id}`, data)

		return res
	} catch (error) {
		return error
	}
}

export const updateReleaseApi = async (
	formData: IPostingFormData,
	releaseCategory: string,
	idRelease: string,
	idCategory: string,
	id: string,
) => {
	try {
		const data = parseData(
			formData,
			idRelease,
			undefined,
			undefined,
			releaseCategory,
			idCategory,
		)

		const res = await useClient().patch(`${Routes.UPDATE_RELEASE}${id}`, data)

		return res
	} catch (error) {
		return error
	}
}

const parseData = (
	formData: IPostingFormData,
	idRelease: string,
	destinedValue?: number,
	createdAt?: string,
	releaseCategory?: string,
	idCategory?: string,
) => {
	let data: Partial<IPostingFormData> = {
		idRelease,
		...(destinedValue !== undefined ? { destinedValue } : {}),
		...(releaseCategory !== undefined ? { releaseCategory } : {}),
		...(idCategory !== undefined ? { idCategory } : {}),
		...(createdAt !== undefined ? { createdAt } : {}),
	}

	for (const key in formData) {
		if (
			formData[key as keyof IPostingFormData] != "" &&
			formData[key as keyof IPostingFormData] != 0
		) {
			data = { ...data, [key]: formData[key as keyof IPostingFormData] }
		}
	}

	return data
}
