/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import HandleError from "@/utils/handleError"
import { IApiResponse, IAsyncProvider, IProps } from "@/utils/interface"
import React, { createContext, useState } from "react"

export const AsyncContext = createContext({} as IAsyncProvider)

const AsyncProvider = ({ children }: IProps) => {
	const [showLoading, setShowLoading] = useState(false)
	const [apiResponse, setApiResponse] = useState<IApiResponse>({
		statusCode: 0,
		response: "",
	})

	const execute = async (
		fn: Function,
		sucessMsg?: string,
		errorMsg?: string,
	) => {
		try {
			setShowLoading(true)

			const res: any = await fn

			if (res?.status > 201) {
				throw new HandleError(res?.data.message, res?.status)
			}

			setApiResponse({ statusCode: res.status, response: sucessMsg })

			return res
		} catch (error: any) {
			if (error instanceof HandleError) {
				setApiResponse({ statusCode: error.statusCode, response: errorMsg })
			}
		} finally {
			setShowLoading(false)
		}
	}

	return (
		<AsyncContext.Provider
			value={{ execute, setShowLoading, showLoading, apiResponse }}>
			{children}
		</AsyncContext.Provider>
	)
}

export default AsyncProvider
