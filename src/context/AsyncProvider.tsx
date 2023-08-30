/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { IApiResponse, IAsyncProvider, IProps } from "@/utils/interface"
import React, { createContext, useState } from "react"

export const AsyncContext = createContext({} as IAsyncProvider)

const AsyncProvider = ({ children }: IProps) => {
	const [showLoading, setShowLoading] = useState(false)
	const [apiResponse, setApiResponse] = useState<IApiResponse>({
		statusCode: 0,
		response: "",
	})

	const clearApiResponse = () => {
		setApiResponse({
			statusCode: 0,
			response: "",
		})
	}

	const execute = async (
		fn: Function,
		sucessMsg?: string,
		errorMsg?: string,
	) => {
		try {
			setShowLoading(true)

			const res: any = await fn

			handleApiResponse(res?.status, sucessMsg, errorMsg)

			return res
		} finally {
			setShowLoading(false)
		}
	}

	const handleApiResponse = (
		status: number,
		sucessMsg?: string,
		errorMsg?: string,
	) => {
		if (status == 201 || status == 204) {
			setApiResponse({ statusCode: status, response: sucessMsg })
		} else if (status > 204) {
			setApiResponse({ statusCode: status, response: errorMsg })
		}
	}

	return (
		<AsyncContext.Provider
			value={{
				showLoading,
				apiResponse,
				execute,
				setShowLoading,
				setApiResponse,
				clearApiResponse,
			}}>
			{children}
		</AsyncContext.Provider>
	)
}

export default AsyncProvider
