/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { IProps, IReleaseContext } from "@/utils/interface"
import React, { createContext, useState } from "react"

export const ReleaseContext = createContext({} as IReleaseContext)

const ReleaseProvider = ({ children }: IProps) => {
	const [showCreateReleaseModal, setShowCreateReleaseModal] = useState(false)
	const [typeAction, setTypeAction] = useState("")

	return (
		<ReleaseContext.Provider
			value={{
				showCreateReleaseModal,
				typeAction,
				setTypeAction,
				setShowCreateReleaseModal,
			}}>
			{children}
		</ReleaseContext.Provider>
	)
}

export default ReleaseProvider
