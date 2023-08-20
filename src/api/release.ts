/* eslint-disable react-hooks/rules-of-hooks */
import { useClient } from "@/clients/AxiosClient"
import { Routes } from "@/utils/enum"
import { IPostingFormData } from "@/utils/interface"

export const createReleaseApi = async (
	formData: IPostingFormData,
	destinedValue: number,
	idRelease: string,
	userId: string,
): Promise<any> => {
	try {
		let data: Partial<IPostingFormData> = { destinedValue, idRelease }

		for (const key in formData) {
			if (formData.hasOwnProperty(key)) {
				data = { ...data, [key]: formData[key as keyof IPostingFormData] }
			}
		}

		const res = await useClient().post(`${Routes.SAVE_RELEASE}${userId}`, data)

		return res
	} catch (error) {
		return error
	}
}
