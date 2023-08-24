import { Messages } from "@/utils/enum"
import { IApiResponseConfig, ResponseMap } from "@/utils/interface"
import React from "react"

const ApiResponse = ({ config }: IApiResponseConfig) => {
	const errorResponse = (
		<p style={{ color: "#ff0000", float: "left" }}>{config?.response}</p>
	)

	const serverError = (
		<p style={{ color: "#ff0000", float: "left" }}>{Messages.SERVER_ERROR}</p>
	)

	const sucessResponse = (
		<p style={{ color: "#019267", float: "left" }}>{config?.response}</p>
	)

	const setResponse = (status: number): JSX.Element => {
		const response: ResponseMap = {
			200: sucessResponse,
			201: sucessResponse,
			204: sucessResponse,
			403: errorResponse,
			404: errorResponse,
			409: errorResponse,
			500: serverError,
		}

		return response[status]
	}

	const ApiResponseComponent = ({ status }: { status: number }) => {
		console.log("ss", status)

		return <>{setResponse(status)}</>
	}

	return <ApiResponseComponent status={config?.statusCode} />
}

export default ApiResponse
